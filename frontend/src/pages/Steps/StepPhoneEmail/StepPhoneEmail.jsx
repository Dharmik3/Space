import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from "./StepPhoneEmail.module.css";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};
const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  const handleNext = () => {};
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.btnWrapper}>
            <button
              className={`${styles.tabBtn} ${
                type === "phone" ? styles.active : ""
              }`}
              onClick={() => setType("phone")}
            >
              <img src="/images/phone.png" alt="phone" />
            </button>
            <button
              className={`${styles.tabBtn} ${
                type === "email" ? styles.active : ""
              }`}
              onClick={() => setType("email")}
            >
              <img src="/images/phone.png" alt="email" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
