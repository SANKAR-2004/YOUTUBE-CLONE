import { useEffect,useState } from "react";
import { YOUTUBE_API } from "../constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
    
    const [videoData, setVideoData] = useState([]);

    async function getVideos() {
      try {
        const data = await fetch(YOUTUBE_API);
        const json_data = await data.json();
        console.log(json_data);
        setVideoData(json_data.items);
      }
      catch(Exception) {
        console.log("Error in API Data");
      }
    }
  
    useEffect(() => {
        getVideos();
    }, []);

    if (videoData?.length == 0) return null;
   
    
    return <div className="flex flex-wrap justify-center">

        {videoData.map((video) => {
            return (
              <div className="m-2" key={video.id}>
                <VideoCard {...video} />
              </div>
            );
        })}

    </div>
    
    
}

export default VideoContainer;