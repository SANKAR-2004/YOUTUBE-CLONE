import { useEffect, useState } from "react";
import { CHANNEL_IMAGE_URL } from "../constants";

const useChannelURL = (channelId) => {
       
       const [channelImgObj, setChannelImgObj] = useState(null);
       async function getChannelDetail() {
                const channeldata = await fetch(CHANNEL_IMAGE_URL + channelId);
                const channelImg = await channeldata.json();
                setChannelImgObj(channelImg.items[0].snippet.thumbnails.default.url);
           //  console.log(channelImg);
    } 
    useEffect(() => {
        if (channelId) {
            getChannelDetail();
        }
    }, [channelId]);

    return channelImgObj;
    
}

export default useChannelURL;