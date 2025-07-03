import { useEffect } from "react";

const Comment = (props) => {
     
 const { textDisplay,likeCount, authorProfileImageUrl, authorDisplayName } = props.data.snippet.topLevelComment.snippet;

  return (
    <div className="flex border-b-2 p-2 border-gray-200">
      <img
        alt="Author"
        className="w-10 h-10 mr-2 rounded-full"
        src={authorProfileImageUrl}
      />
      <div>
        <p className="font-bold text-xs">{authorDisplayName}</p>
        <p className="text-s">{textDisplay} </p>
        <span className="text-s">
          {(likeCount <= 1000) ? likeCount : parseInt(likeCount / 1000)+"k"} 👍
        </span>
      </div>
    </div>
  );
}

export default Comment;