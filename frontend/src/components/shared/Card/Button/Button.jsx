import React from 'react'
import styles from './Button.module.css'
const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <span>{text}</span>
          <img src="/images/arrow_forward.png" alt="arrow" className={ styles.arrow} />
    </button>
  );
}

export default Button