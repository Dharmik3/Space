const hashService = require('../services/hash-service');
const otpService = require('../services/otp-service');
const tokenService = require('../services/token-service');
const userService = require('../services/user-service');
const UserDto = require('../dtos/user-dto')
class AuthController {
    async sendOtp(req, res) {

        // logic
        const { phone } = req.body;
        if (!phone) {
            res.status(400).json({ message: 'Phone field is required' })
        }

        // generate otp
        const otp = await otpService.generateOtp();

        //   hashing otp
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`
        const hash = hashService.hashOtp(data);

        //   sendotp
        try {
            // await otpService.sendBySms(phone, otp);
            return res.json({
                hash: `${hash}.${expires}`,
                phone,
                otp
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Otp sending failed" })
        }
    }

    async verifyOtp(req, res) {
        const { otp, hash, phone } = req.body;
        if (!otp || !hash || !phone) {
            res.status(400).json({ message: 'All field is required' })
        }

        const [hashedOtp, expires] = hash.split('.');
        if (Date.now() > expires) {
            res.status(400).json({ message: 'OTP expired' })
        }

        const data = `${phone}.${otp}.${expires}`;
        const isValid = otpService.verifyOtp(hashedOtp, data);
        if (!isValid) {
            res.status(400).json({ message: 'Invalid OTP' })
        }

        let user;

        try {
            user = await userService.findUser({ phone })
            if (!user) {
                user = await userService.createUser({ phone });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'DB error' })
        }

        //    token
        const { accessToken, refreshToken } = tokenService.generateTokens({ _id: user._id, activated: false });

        res.cookie('refreshtoken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        })
        const userDto = new UserDto(user);
        res.json({ accessToken, user:userDto })
    }
}

module.exports = new AuthController();