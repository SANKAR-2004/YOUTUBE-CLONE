import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import RelatedVideoContainer from "./RelatedVideoContainer";
import useVideoDetails from "../utils/useVideoDetails";
import useChannelURL from "../utils/useChannelURL";
import { useEffect, useState } from "react";
import { RELATED_VIDEO_API, VIDEO_DETAILS_API } from "../constants";
import ChatContainer from "./ChatContainer"; 
import { useSelector } from "react-redux";

const WatchPage = () => {
   
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [videoData, setVideoData] = useState({});
  const Id = searchParams.get("v");
  const channelId = searchParams.get("channelId");
  console.log("OG CHANNEL ID -> " + channelId);
  const CURL = useChannelURL(channelId);
  const darkmode = useSelector((store) => {
    return store.colorMode.darkMode;
  });
  //console.log(channelUrl);
  //const { channelId, channelTitle, title, description,tags } = useVideoDetails(Id);
  
      async function getvideoDetails() {
          const data = await fetch(VIDEO_DETAILS_API + Id);
          const json = await data.json();
        setVideoData({ ...json.items[0].snippet });
          console.log(videoData);
      }

      useEffect(() => {
        getvideoDetails();
      }, [Id]);
      
  

  const VideoId = "https://www.youtube.com/embed/" + Id;
  
   if (Object.keys(videoData).length === 0) return null;
  // if (!videoData.channelId) { return null; }
    return (
      <div className={`flex py-6 px-24 ${(darkmode) && "bg-gray-700 text-white"}`}>
        <div className="w-8/12">
          <iframe
            className="w-full h-[470px]"
            src={VideoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {
            <div>
              <p className="font-bold text-xl px-2 my-1">{videoData.title}</p>
              <div className="flex justify-between gap-x-2 items-center">
                <div className="flex items-center gap-x-1.5">
                  {CURL && (
                    <img className="w-12 h-12 rounded-full" src={CURL} />
                  )}
                  <span className="w-96">
                    {videoData.channelTitle}
                  </span>
                </div>
                <div className="">
                  <span className="px-3 py-2 mr-10 rounded-full bg-green-400">
                    🧡 52 Likes
                  </span>
                </div>
              </div>
            </div> 
          }
          <div className="w-full py-2">
            <ChatContainer/>
           </div>
          <CommentsContainer videoid={Id} />
        </div>

        {videoData.tags && (
          <div className="w-4/12">
            <RelatedVideoContainer
              tag={
                videoData.tags[
                  Math.floor(Math.random() * videoData.tags.length)
                ]
              }
              videoId={Id}
              channelId={videoData.channelId}
            />
          </div>
        )}
      </div>
    );
}


export default WatchPage;