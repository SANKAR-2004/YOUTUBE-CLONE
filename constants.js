const API_KEY = process.env.REACT_APP_API_KEY;
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" + API_KEY;

export const CHANNEL_IMAGE_URL = "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails&key=" + API_KEY + " &id=";

export const SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=";

export const YOUTUBE_COMMENT_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
  API_KEY +
  "&textFormat=plainText&part=snippet&maxResults=10&videoId=";

//The comments can have a max of 100 Increase it when needed...

export const SEARCHBAR_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&videoDuration=medium&type=video&key=" +
  API_KEY +
  "&q=";

  //the below one is for related videos which requires length one and not shorts
export const SEARCHBAR_API_2 =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&&type=video&videoDuration=medium&key=" +
  API_KEY +
  "&q=";
  
export const RELATED_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/search?key=" +
  API_KEY +
  "&part=snippet,id&order=date&maxResults=10&channelId=";

//For a Single Video With Id

export const VIDEO_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&key="+API_KEY+"&id=";
