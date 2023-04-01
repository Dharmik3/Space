import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../http";
import styles from "./Navigation.module.css";
import { useDispatch,useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
const Navigation = () => {
  const brandStyle = { 
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.auth);
  const logoutUser = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" style={brandStyle}>
        <img src="/images/logo.png" alt="logo" className="logo" />
        <span style={logoText}>CodersHouse</span>
      </Link>
    { isAuth&& <button onClick={logoutUser}>Logout</button>}
    </nav>
  );
};

export default Navigation;
