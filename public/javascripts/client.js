navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;

let localVideo = document.getElementById('local_video');
let localStream = null;
function startVideo(){
  navigator.getUserMedia({video: true, audio: false}, 
    function(stream) { // for success case
      console.log(stream);
      localStream = stream;
      /* video.src = window.URL.createObjectURL(stream); 
       Chrome68以降で URL.createObjectURL が使えなくなったらしいので、
       以下のsrcObjectプロパティを使うように修正 */
      localVideo.srcObject = stream;
    },
    function(err) { // for error case
      console.log(err);
    });
}

  // stop local video
function stopVideo() {
  pauseVideo(localVideo);
  stopLocalStream(localStream);
}
function pauseVideo(element) {
  element.pause();
  if ('srcObject' in element) {
    element.srcObject = null;
  }
  else {
    if (element.src && (element.src !== '') ) {
      window.URL.revokeObjectURL(element.src);
    }
    element.src = '';
  }
}
function stopLocalStream(stream) {
  let tracks = stream.getTracks();
  if (! tracks) {
    console.warn('NO tracks');
    return;
  }
  
  for (let track of tracks) {
    track.stop();
  }
}