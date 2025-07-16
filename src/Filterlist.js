import { useSelector } from "react-redux";
import { useState } from "react";
import { SEARCHBAR_API } from "../constants";
import { addData } from "../Redux Store/VideoDataSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_API } from "../constants";

const Filterlist = () => {
    const [selected, setSelected] = useState("All");
    const list = ["All","Consciousness","Sports","Entertainment","Music","JukeBox","Cinema","Songs","Shopping","Comedy"];
    const darkmode = useSelector((store) => {
      return store.colorMode.darkMode;
    });
  const dispatch = useDispatch(); 
 
  async function handleClick(item) {
    setSelected(item);
    if (item == "All") {
         const data = await fetch(YOUTUBE_API);
         const json_data = await data.json();
         dispatch(addData(json_data.items));
      }
    else {
      const data = await fetch(SEARCHBAR_API + item);
      const json = await data.json();
      dispatch(addData(json.items));
     }
    }
  return <div className={`${(darkmode) ? "bg-gray-600/40 text-white " : "bg-gray-300/70 "} flex px-4 w-screen md:justify-center my-2 md:my-1   rounded-xl md:bg-transparent no-scroll-bar overflow-x-scroll z-10 `}>
        
        {list.map((item) => {
          return <button onClick={() => {
            handleClick(item)
          }} className={`${(selected == item) && "bg-green-400"} py-2 px-4 m-3 border-gray-500 cursor-pointer rounded-lg ${(darkmode) ? "bg-gray-700 text-white border-2 border-gray-400" : "bg-gray-100"}`} key={item}>
                {item}
        </button> })}
       </div>;
}

export default Filterlist;