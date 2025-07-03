import { useState,useRef, useEffect } from "react";
import LiveChat from "./LiveChat";
import { useSelector,useDispatch } from "react-redux";
import { chats } from "../utils/helper";
import { addChat,deleteChat } from "../Redux Store/ChatSlice";

const ChatContainer = () => {
  const [showChat, setShowChat] = useState(false);
  const [chatmsg, setChatMsg] = useState("");
    let ref = useRef(null);
    let count = useRef(0);
  const chatItems = useSelector((store) => { return store.LiveChat.chats });
  const darkmode = useSelector((store) => {
    return store.colorMode.darkMode;
  });
    const dispatch = useDispatch();
  
  useEffect(() => {
    if (showChat) {
        ref.current = setInterval(() => {
          dispatch(addChat(chats[count.current]));
        count.current = count.current + 1;
       console.log("API CALLING...");
      }, 2200);
    } else if (ref.current) {
      clearInterval(ref.current);
      dispatch(deleteChat());
    }
  }, [showChat]);  
  


    return (
      <div className="overflow-y-scroll  no-scroll-bar px-4 rounded-lg shadow-md border-2 border-gray-100 text-2xl ">
        <div
          className={`px-4 sticky top-0 py-3 ${showChat && "border-b-2"} rounded-lg flex justify-between ${
            darkmode
              ? "bg-gray-700 border-white/70 text-white"
              : "bg-gray-50 border-gray-500"
          }`}
        >
          <h1 className="font-bold">Live Chat</h1>
          <span
            className="cursor-pointer"
            onClick={() => setShowChat(!showChat)}
          >
            ⬇️
          </span>
        </div>
        {showChat && chatItems && (
          <div className="overflow-y-scroll flex flex-col-reverse h-96 mt-3">
            {chatItems.map((chat, index) => {
              return <LiveChat key={index} {...chat} />;
            })}
          </div>
        )}
        {showChat && (
          <div className="flex justify-between items-center">
            <input
              type="text"
              value={chatmsg}
              className="text-base outline-none p-4 w-full "
              placeholder="Type Something"
              onChange={(e) => {
                setChatMsg(e.target.value);
                console.log(chatmsg);
              }}
            />
            <span
              className="text-base cursor-pointer font-bold bg-green-400 text-white px-4 py-2 rounded-lg mr-4"
              onClick={() => {
                dispatch(addChat({ name: "Shankar", msg: chatmsg }));
                setChatMsg("");
              }}
            >
              Send
            </span>
          </div>
        )}
      </div>
    );
} 

export default ChatContainer;