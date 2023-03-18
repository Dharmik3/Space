import React,{useState} from 'react'
import Button from '../../../../components/Button/Button';
import Card from '../../../../components/shared/Card/Card';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css'
const Email = ({onNext}) => {

  const [email, setEmail] = useState('')
  return (
    <Card title="Enter your email id" icon="phone">
      <TextInput value={email} onchange={(e) => setEmail(e.target.value)} />
      <div>
        <div className={styles.actionBtnWrap}>
          <Button text="Next" onClick={onNext} />
        </div>

        <p className={styles.bottomParagraph}>
          By entering phone number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
}

export default Email