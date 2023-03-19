import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Card/Button/Button";
import styles from "../StepPhoneEmail.module.css";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import { sendOtp } from "../../../../http";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../store/authSlice";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();

  const submit = async () => {
    const { data } = await sendOtp({ phone: phoneNumber });
    const{phone,hash}=data
    dispatch(setOtp({ phone, hash }));
    console.log(data);
    onNext();
  };
  return (
    <Card title="Enter your phone number" icon="phone">
      <TextInput
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <div>
        <div className={styles.actionBtnWrap}>
          <Button text="Next" onClick={submit} />
        </div>

        <p className={styles.bottomParagraph}>
          By entering phone number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
