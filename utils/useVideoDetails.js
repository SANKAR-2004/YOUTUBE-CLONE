import { useEffect,useState } from "react";
import { VIDEO_DETAILS_API } from "../constants";

const useVideoDetails = (videoId) => {

    const [videoData, setVideoData] = useState({});
 
    async function getvideoDetails() {
        const data = await fetch(VIDEO_DETAILS_API + videoId);
        const json = await data.json();
        setVideoData({ ...videoData, ...json.items[0].snippet });
        console.log(videoData);
    }
    useEffect(() => {
        getvideoDetails();
    }, []);
 
    //It is only returning the things inside snippet such as channelId,Description....
    //If you want anything check with the API and alter getvideoDetails().
    return videoData;
}

export default useVideoDetails;