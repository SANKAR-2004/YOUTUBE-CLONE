import Comment from "./Comment";
import { useEffect,useState } from "react";
import { YOUTUBE_COMMENT_API } from "../constants";


const CommentsContainer = ({ videoid }) => {
    const [commentData, setCommentData] = useState([]);
    
    async function getComments() {
      const data = await fetch(YOUTUBE_COMMENT_API + videoid);
      const jsonData = await data.json();
      setCommentData(jsonData.items);
      console.log(jsonData.items);
  }
  
    useEffect(() => {
      getComments();
    }, [videoid]);

    if (commentData?.length == 0) return null;
    return (
        <div className="p-8 w-full">
            <h2 className="font-bold text-3xl mb-6 font-serif ">Top Comments</h2>
            {commentData.map((item) => {
                return <Comment key={item.id} data={item} />
            })}
        </div>
    )
}

export default CommentsContainer;