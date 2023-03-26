import React,{useState} from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Card/Button/Button";
import TextInput from "../../../components/shared/TextInput/TextInput";
import { useDispatch,useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";
import styles from './StepName.module.css'

const StepName = ({ onNext }) => {
  const {name}=useSelector(state=>state.activate)
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState(name);

  const nextStep = () => {
    if (!fullname) {
      return;
    }
    dispatch(setName(fullname));
    onNext();
  };

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="What's your full name?" icon="googles-emoji">
          <TextInput
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <div>
            <p className={styles.paragraph}>
              People use real names at codershouse :)
            </p>
            <div>
              <Button text="Next" onClick={nextStep} />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepName;
