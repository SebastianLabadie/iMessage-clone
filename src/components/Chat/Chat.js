import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectChatID, selectChatName } from "../../features/chatSlice";
import { db } from "../../firebase";
import "./Chat.css";
import Message from "./Message/Message";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";
import FlipMove from 'react-flip-move'

function Chat() {
  const user = useSelector(selectUser);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatName = useSelector(selectChatName);
  const chatID = useSelector(selectChatID);

  useEffect(() => {
    if (chatID) {
      db.collection("chats")
        .doc(chatID)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((message) => ({
              id: message.id,
              data: message.data(),
            }))
          )
        );
    }
  }, [chatID]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chats")
      .doc(chatID)
      .collection("messages")
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message,
        ...user,
      });
    setMessage("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>{" "}
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
        <FlipMove>
          {messages?.map(({ id, data }) => (
            <Message key={id} content={data} />
          ))}
        </FlipMove>
      </div>

      <div className="chat__input">
        <form>
          <input
            type="text"
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
