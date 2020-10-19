import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Chanel name</span>{" "}
        </h4>
        <strong>details</strong>
      </div>

    <div className="chat__messages">
        <h2>messages</h2>
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
