import { useEffect } from "react";
import useChannelURL from "../utils/useChannelURL";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const RelatedVideoCard = ({ snippet, id }) => {
  
  const { videoId } = id;
  const { channelId, channelTitle,title } = snippet;
  const { url } = snippet.thumbnails.medium;
  const darkmode = useSelector((store) => {
    return store.colorMode.darkMode;
  });
  
  const channelUrl = useChannelURL(channelId);

    return (
      <Link to={"/watch?v=" + videoId + "&channelId=" + channelId}>
        <div
          className={`cursor-pointer flex gap-2 shadow-lg border-b-2 border-gray-300 rounded-lg p-3 ${
            darkmode ? "bg-gray-700 text-white border-gray-400/70" : "bg-gray-50"
          }`}
        >
          <img className="w-40 rounded-lg h-28" src={url} />
          <div>
            <p className="font-bold h-12 overflow-hidden">
              {title.length > 45 ? title.substr(0, 45) + "..." : title}
            </p>
            <div className="mt-2 flex items-center gap-x-1 ">
              {channelUrl && (
                <img className="w-8 h-8 rounded-full" src={channelUrl} />
              )}
              <p className="text-xs">{channelTitle}</p>
            </div>
            <p className="mt-1 text-xs">Views</p>
          </div>
        </div>
      </Link>
    );
}

export default RelatedVideoCard;