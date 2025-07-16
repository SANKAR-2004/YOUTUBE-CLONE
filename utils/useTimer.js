
const useTimer = (duration) => {

    if (!duration) return;
    let timeTxt;
    const check = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    let hours = parseInt(check[1] || 0);
    let minutes = parseInt(check[2] || 0);
    let seconds = parseInt(check[3] || 0);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (hours == 0) {
      timeTxt = minutes + ":" + seconds;
    }
    if (hours !== 0) {
      timeTxt = hours + ":" + minutes + ":" + seconds;
    }

    return timeTxt;
}

export default useTimer;