import { useEffect,useState } from "react";
import { YOUTUBE_API } from "../constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Redux Store/VideoDataSlice";

const VideoContainer = () => {
   
  const dispatch = useDispatch();
  const videos = useSelector((store) => {
    return store.videos.videos;
  })

    async function getVideos() {
      try {
        const data = await fetch(YOUTUBE_API);
        const json_data = await data.json();
        console.log(json_data);
       // setVideoData(json_data.items);
        dispatch(addData(json_data.items));
      }
      catch(Exception) {
        console.log("Error in API Data");
      }
    }
  
    useEffect(() => {
        getVideos();
    }, []);

  //  if (videoData?.length == 0) return null;
     if (videos.length === 0) return null;
    
    return <div className="flex w-screen flex-wrap justify-center">

        {videos.map((video) => {
            return (
              <div className="m-2" key={video.etag}>
                <VideoCard {...video} />
              </div>
            );
        })}

    </div>
    
    
}

export default VideoContainer;