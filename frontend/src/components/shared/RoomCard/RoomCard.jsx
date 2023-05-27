import React from "react";
import {useNavigate} from 'react-router-dom'
import styles from "./RoomCard.module.css";
const RoomCard = ({ room }) => {
  const navigate=useNavigate()
  return (
    <div
      onClick={() => {
        navigate(`/room/${room.id}`);
      }}
      className={styles.card}
    >
      <h3 className={styles.topic}>{room.topic}</h3>
      <div
        className={`${styles.speakers} ${
          room.speakers.length === 1 ? styles.singleSpeaker : ""
        }`}
      >
        <div className={styles.avatars}>
          {room.speakers.map((speaker) => (
            <img src={speaker.avatar} alt="speaker-avatar" key={speaker.id} />
          ))}
        </div>
        <div className={styles.names}>
          {room.speakers.map((speaker) => (
            <div className={styles.nameWrapper} key={speaker.id}>
              <span>{speaker.name}</span>
              <img src="/images/chat-bubble.png" alt="chat-bubble" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pepoleCount}>
        <span>{room.totalPeople}</span>
        <img src="/images/user-icon.png" alt="user icon" />
      </div>
    </div>
  );
};

export default RoomCard;
