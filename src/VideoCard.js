import { useEffect, useState } from "react";
import { CHANNEL_IMAGE_URL } from "../constants";
import { Link } from "react-router";
import useTimer from "../utils/useTimer";
import { useSelector } from "react-redux";

const VideoCard = ({contentDetails,snippet,statistics,id}) => {
   
    const [channelImgObj, setChannelImgObj] = useState("");
    const { channelId, channelTitle, description,title } = snippet;
 // const { title } = snippet?.localized;
    const { url } = (snippet?.thumbnails?.maxres)
      ? snippet?.thumbnails?.maxres
      : snippet?.thumbnails?.medium;
 // const { duration } = contentDetails;
  const darkmode = useSelector((store) => {
    return store.colorMode.darkMode;
  });
    
  if (id.videoId) { id = id.videoId };
  
  let viewCount,duration;
  if (contentDetails && statistics) {
    viewCount = statistics.viewCount;
    duration = contentDetails.duration;
  }
  const timeTxt = useTimer(duration);
   // const { viewCount, likeCount, commentCount } = statistics;

    async function getChannelDetail() {
            const channeldata = await fetch(CHANNEL_IMAGE_URL + channelId);
            const channelImg = await channeldata.json();
            setChannelImgObj(channelImg.items[0].snippet.thumbnails.medium.url);
          //  console.log(channelImg);
    }
    useEffect(() => {
        getChannelDetail();  
    },[])
    const videoId = "https://www.youtube.com/embed/" + id;
    
    if (channelImgObj === "") return null;

    return (
      <Link to={"/watch?v=" + id +"&channelId="+channelId}>
        <div className={`relative w-80 shadow-xl cursor-pointer rounded-2xl h-80 flex flex-col ${darkmode && "shadow-gray-700/50 text-white"}`}>
          <img
            src={url}
            className="rounded-2xl self-center h-8/12 w-full"
            alt="thumbnail"
          />
          <span className="absolute top-[190px] rounded-lg text-xs right-0 bg-[rgb(0,0,0)]/65 text-white py-1 px-2">
            {timeTxt}
          </span>

          <div className="flex">
            <img
              src={channelImgObj}
              className="w-12 p-2 rounded-full h-12"
              alt="Channel Image"
            />
            <div>
              <h2 className="font-bold text-m my-1 h-12 overflow-hidden">
                {title.length < 40 ? title : title.slice(0, 40) + "..."}
              </h2>
              <p className="text-md">
                {channelTitle}
                <span className="opacity-80">✅</span>
              </p>
              <p className="text-sm">
                {viewCount > 1000000
                  ? parseInt(viewCount / 1000000) + "M"
                  : parseInt(viewCount / 1000) + "K"}{" "}
                Views
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
}

export default VideoCard;