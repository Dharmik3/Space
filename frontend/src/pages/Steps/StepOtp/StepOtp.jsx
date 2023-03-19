import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import Button from "../../../components/shared/Card/Button/Button";
import styles from "./StepOtp.module.css";
import { verifyOtp } from "../../../http";
import { useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp)

  const submit =async () => {
    try {
      const { data } = await verifyOtp({ otp, phone, hash })
      console.log(data)
      dispatch(setAuth(data))
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter One Time Password" icon="lock">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div>
            <div className={styles.actionBtnWrap}>
              <Button text="Next" onClick={submit}/>
            </div>

            <p className={styles.bottomParagraph}>
              By entering phone number, you're agreeing to our Terms of Service
              and Privacy Policy. Thanks!
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
