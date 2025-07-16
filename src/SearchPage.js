import { useSearchParams } from "react-router";
import SearchCard from "./SearchCard";
import { useState,useEffect } from "react";
import { SEARCHBAR_API } from "../constants";
import { useSelector } from "react-redux";
import RelatedVideoCard from "./RelatedVideoCard";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [videos, setVideos] = useState([]);
    const keyword = searchParams.get("k");
    const darkmode = useSelector((store) => {
      return store.colorMode.darkMode;
    });

    async function getVideos() {
        const data = await fetch(SEARCHBAR_API + keyword);
        const jsonData = await data.json();
        const filteredVideos = jsonData.items.filter((item) => {
            return item.id.kind === "youtube#video";
        });
        console.log(filteredVideos);
        setVideos(filteredVideos);
    }

    useEffect(() => {
        getVideos();
    }, [searchParams]);

    if (videos.length == 0) return null;
    
    return (
      <>
        <div
          className={`hidden md:flex  w-8/12  flex-col rounded-lg shadow-lg mt-6 justify-center md:mx-auto ${
            darkmode ? "bg-gray-700 text-white" : "bg-gray-50"
          }`}
        >
          {videos.map((video) => {
            return <SearchCard key={video.id.videoId} {...video} />;
          })}
        </div>

        <div
          className={` md:hidden w-8/12 flex flex-col rounded-lg shadow-lg mt-6 justify-center md:mx-auto ${
            darkmode ? "bg-gray-700 text-white" : "bg-gray-50"
          }`}
        >
          {videos.map((video) => {
            return <RelatedVideoCard note={"search"} key={video.id.videoId} {...video} />;
          })}
        </div>
      </>
    );
}

export default SearchPage;