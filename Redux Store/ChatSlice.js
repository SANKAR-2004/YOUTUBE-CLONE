import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "LiveChats",
  initialState: {
    chats: [],
  },
  reducers: {
    addChat: (state, action) => {
      if (state.chats.length > 20) {
        state.chats.splice(20, 1);
      }
      state.chats.unshift(action.payload);
    },
    deleteChat: (state) => {
      state.chats.length = 0;
    }
  },
});

export const { addChat,deleteChat } = ChatSlice.actions;
export default ChatSlice.reducer;
