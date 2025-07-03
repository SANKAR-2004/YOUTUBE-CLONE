import { useSelector } from "react-redux";

const Filterlist = () => {
    const list = ["All","Consciousness","Sports","Entertainment","Music","JukeBox","Cinema","Songs","Shopping","Comedy"];
    const darkmode = useSelector((store) => {
      return store.colorMode.darkMode;
    });
    return <div className="flex z-10 justify-center">
        
        {list.map((item) => {
            return <button className={`p-2 m-3 border-gray-500 cursor-pointer rounded-lg ${(darkmode) ? "bg-gray-700 text-white":"bg-gray-100"}`} key={item}>
                {item}
        </button> })}
       </div>;
}

export default Filterlist;