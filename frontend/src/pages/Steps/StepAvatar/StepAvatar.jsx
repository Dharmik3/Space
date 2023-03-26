import React,{useState} from 'react'
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Card/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../../store/activateSlice";
import { setAuth } from "../../../store/authSlice";
import styles from "./StepAvatar.module.css";
import { activate } from '../../../http';


const StepAvatar = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name ,avatar} = useSelector((state) => state.activate)
  const [image, setImage] = useState('/images/avatar.png')

  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
      dispatch(setAvatar(reader.result))
    }
  }

  const submit=async()=>{
    try {
      const { data } = await activate({ name, avatar })
      if (data.auth) {
        dispatch(setAuth(data))
      }
      console.log(data)
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title={`Okay, ${name}!`} icon="monkey-emoji">
          <p className={styles.subHeading}>How’s this photo?</p>
          <div className={styles.avatarWrapper}>
            <img src={image} alt="avatar" className="avatar" />
          </div>
          <div className="">
            <input
              onChange={captureImage}
              id="avatarInput"
              type="file"
              className={styles.avatarInput}
            />
            <label
              className={styles.avatarLabel}
              htmlFor="avatarInput">Choose a differnt photo</label>
          </div>
          <div>
            <Button text="Next" onClick={submit} />
          </div>
        </Card>
      </div>
    </>
  );
}

export default StepAvatar;