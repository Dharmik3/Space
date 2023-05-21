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
  const { isAuth,user } = useSelector(state => state.auth);
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
      {isAuth && (
        <div className={styles.navRight}>
          <h3>{user.name}</h3>
          <Link to="/">
            <img
              src={user.avatar}
              className={styles.avatar}
              width="40"
              height="40"
              alt="avatar"
            />
          </Link>
          <button className={styles.logoutBtn} onClick={logoutUser}>
            <img
              src="/images/arrow.png"
              className={styles.logout}
              width="40"
              height="40"
              alt="logout"
            />
          </button>
        </div>
      )}

      {/* { isAuth&& <button onClick={logoutUser}>Logout</button>} */}
    </nav>
  );
};

export default Navigation;
