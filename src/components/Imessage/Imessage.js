import React from "react";
import "./Imessage.css";
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

function Imessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Imessage;
