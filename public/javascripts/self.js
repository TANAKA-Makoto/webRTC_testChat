navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;

const deviceSelector = document.getElementById('deviceSelector');
let localVideo = document.getElementById('local_video');
let localStream = null;
let constraints = {
                    video: true,
                    audio: false};

navigator.mediaDevices.enumerateDevices()
.then(function(devices) { // 成功時
 devices.forEach(function(device) {
  console.log(device);
  const deviceID=device.deviceId;
  if (device.kind === "videoinput") {
    newChild = document.createElement('option');
    newChild.textContent = device.label;
    newChild.setAttribute('data-deviceID', deviceID);
    deviceSelector.appendChild(newChild);
  }
 });
})
.catch(function(err) { // エラー発生時
 console.error('enumerateDevide ERROR:', err);
});

function startVideo(){
  const num = deviceSelector.selectedIndex;
  const deviceID = deviceSelector.options[num].getAttribute('data-deviceID');
  constraints.video = {deviceId: {exact: deviceID}};
  navigator.getUserMedia(constraints, 
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