import React, { useState } from "react";
import Button from "../../../../components/shared/Card/Button/Button";
import Card from "../../../../components/shared/Card/Card";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";
const Email = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const submit=() => {
    onNext();
  }
  return (
    <Card title="Enter your email id" icon="email">
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
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

export default Email;
