import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatID: null,
    chatName: null,
  
  },
  reducers: {
    setChat: (state, action) => {
      state.chatID = action.payload.chatID;
      state.chatName = action.payload.chatName;
    },
    logout: (state, action) => {
      state.user = null;
    }
  },
});

export const { login, logout } = chatSlice.actions;

export const selectChatID= state => state.chat.chatID;
export const selectChatName= state => state.chat.chatName;


export default chatSlice.reducer;
