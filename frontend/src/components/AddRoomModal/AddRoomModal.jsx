import React, { useState } from "react";
import styles from "./AddRoomModal.module.css";
import TextInput from "../shared/TextInput/TextInput";
import { createRoom as create } from "../../http";
import { useNavigate } from "react-router-dom";

const AddRoomModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState("open");
  const [topic, setTopic] = useState("");

  async function createRoom() {
    try {
      if (!topic) return;
      const { data } = await create({ topic, roomType });

      navigate(`/room/${data.id}`)
      console.log(data)
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className={styles.modalMask}>
      <div className={styles.modlaBody}>
        <button className={styles.closeBtn} onClick={onClose}>
          <img src="/images/close.png" alt="close" />
        </button>
        <div className={styles.modalHeader}>
          <h3 className={styles.header}>Enter the topic to be discussed</h3>
          <TextInput
            fullWidth="true"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <h2 className={styles.subHeading}>Room types</h2>
          <div className={styles.roomTypes}>
            <div
              onClick={() => setRoomType("open")}
              className={`${styles.typeBox} ${
                roomType === "open" ? styles.active : ""
              }`}
            >
              <img src="/images/globe.png" alt="globe" />
              <span>Open</span>
            </div>
            <div
              onClick={() => setRoomType("social")}
              className={`${styles.typeBox} ${
                roomType === "social" ? styles.active : ""
              }`}
            >
              <img src="/images/social.png" alt="social" />
              <span>Social</span>
            </div>
            <div
              onClick={() => setRoomType("private")}
              className={`${styles.typeBox} ${
                roomType === "private" ? styles.active : ""
              }`}
            >
              <img src="/images/private.png" alt="private" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <h2>Start a room, open to everyone</h2>
          <button onClick={createRoom}>
            <img src="/images/celebration.png" alt="celebration" />
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoomModal;
