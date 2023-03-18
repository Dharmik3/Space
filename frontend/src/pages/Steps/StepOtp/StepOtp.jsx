import React,{useState} from 'react'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import Button from '../../../components/Button/Button'
import styles from './StepOtp.module.css'
const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState('')
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter One Time Password" icon="phone">
          <TextInput
            value={otp}
            onchange={(e) => setOtp(e.target.value)}
          />
          <div>
            <div className={styles.actionBtnWrap}>
              <Button text="Next" />
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

export default StepOtp