import useChannelURL from "../utils/useChannelURL"; 
import { Link } from "react-router";
  
const SearchCard = ({ id,snippet }) => {
    const { videoId } = id;
    const { title, description, channelTitle, channelId } = snippet;
    const { url } = snippet.thumbnails.medium;
    
    const channelImage = useChannelURL(channelId);

    if (channelImage == "") return null;

    return (
      <Link to={"/watch?v=" + videoId+"&channelId="+channelId}>
        <div className="relative  flex cursor-poiner px-10 w-screen md:w-full">
          <img
            alt="Video Thumbnail"
            className="bg-amber-600 my-2 w-72 md:w-[420px] h-44 md:h-72 mx-4 rounded-lg"
            src={url}
          />

          <span className="hidden md:block py-1 rounded-lg px-2 text-xs bg-[rgb(0,0,0)]/70 text-white top-64 left-[437px] absolute">
            1:22
          </span>

          <div className="w-8/12 mt-0 md:mt-6">
            <p className="my-0 md:my-3 font-bold">{title} </p>
            <p className="my-3 text-xs">Views</p>
            <div className="flex items-center gap-1 my-3">
              <img className="w-10 h-10 rounded-full" src={channelImage} />
              <p className="text-xs">{channelTitle}</p>
            </div>
            <p className="hidden md:block text-xs">{description}</p>
          </div>

        </div>
      </Link>
    );
}

export default SearchCard;