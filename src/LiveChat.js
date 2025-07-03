import { useSelector } from "react-redux";

const LiveChat = ({ name, msg }) => {
    const darkmode = useSelector((store) => {
      return store.colorMode.darkMode;
    });

    return (
      <div
        className={`text-base shadow-md px-3 py-3 my-1 flex gap-2 ${
          darkmode ? "bg-gray-700 text-white shadow-white/10" : "bg-gray-100"
        }`}
      >
        <h2 className="font-bold">
          {name} <span className="text-sm">{"☑️"}</span>
        </h2>
        <span>{msg}</span>
      </div>
    );
}

export default LiveChat;