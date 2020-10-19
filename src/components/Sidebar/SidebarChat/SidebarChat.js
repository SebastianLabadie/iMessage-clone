import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setChat } from '../../../features/chatSlice'
import './SidebarChat.css'

function SidebarChat({id,chatName}) {
    const dispatch=useDispatch()
    const [chatInfo,setChatInfo]=useState([])
    
    return (
        <div onClick={()=>dispatch(setChat({chatID:id,chatName}))}  className="sidebarChat" >
            <Avatar src="" className="sidebarChat__avatar" />
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>Last message</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat
