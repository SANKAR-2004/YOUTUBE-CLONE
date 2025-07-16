import { useEffect, useState } from "react";
import RelatedVideoCard from "./RelatedVideoCard";
import { RELATED_VIDEO_API, SEARCHBAR_API_2 } from "../constants";
import { filterShorts } from "../utils/helper";
 
const RelatedVideoContainer = ({channelId,tag,videoId}) => {
  
  const [relatedVideos, setRelatedVideos] = useState([]);

  async function getRelatedVideos() {
    const data = await fetch(SEARCHBAR_API_2 + tag);
    const json = await data.json();
    setRelatedVideos(json.items);
  }
  useEffect(() => {
    if (channelId) {
      getRelatedVideos();
    }
  }, [channelId]);

  if (relatedVideos.length === 0) return null;

    return (
      <div className="">
        <h1 className="ml-3 my-2 md:my-0 text-2xl font-extrabold">Related Videos</h1>

        {relatedVideos.map((video) => {
            if (video.id.videoId !== videoId)
              return <RelatedVideoCard note={""} key={video.etag} {...video} />;
        })}
      </div>
    );
}

export default RelatedVideoContainer;