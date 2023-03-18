import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/shared/Card/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const signINLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const navigate = useNavigate();
  const startRegister = () => {
    navigate("/authenticate");
  };
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to CodersHouse!" icon="logo">
        <p className={styles.text}>
          We're working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we're adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Let's Go" />
        </div>
        <div className={styles.signinWrapper}>
          <sapn className={styles.hasInvite}>Have an invite text?</sapn>
        </div>
      </Card>
    </div>
  );
};

export default Home;
