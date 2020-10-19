import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat/SidebarChat";
import {  useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth, db } from "../../firebase";

function Sidebar() {
  const [chats,setChats] = useState([])
  const user=useSelector(selectUser)

  useEffect(()=>{
    db.collection('chats').onSnapshot(snapshot=> {
       setChats(snapshot.docs.map(chat=>({id:chat.id,data:chat.data()})))
    })
  },[])


  const addChat = ()=>{

    const chatName=prompt('Please enter the chat name.')

    if(chatName){
      db.collection('chats').add({
        chatName
      })
    }
  }


  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar onClick={()=>auth.signOut()} src={user?.photo} className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <IconButton variant="outlined" className="sidebar__inputButton">
          <RateReviewOutlinedIcon onClick={addChat} />
        </IconButton>
      </div>
      <div className="sidebar__chats">
         {chats?.map(({id,data:{chatName}})=><SidebarChat key={id} id={id} chatName={chatName} />)}
      </div>
    </div>
  );
}

export default Sidebar;
