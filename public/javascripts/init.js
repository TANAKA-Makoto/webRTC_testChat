const wsUrl = 'ws://192.168.0.28:9000/';
const ws = new WebSocket(wsUrl);
const socketUrl = 'http://192.168.0.28:9001/';
// --- prefix -----
navigator.getUserMedia  = navigator.getUserMedia    || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;
RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
RTCSessionDescription = window.RTCSessionDescription || window.webkitRTCSessionDescription || window.mozRTCSessionDescription;
function _assert(desc, v) {
     if (v) {
       return;
     }
     else {
       let caller = _assert.caller || 'Top level';
       console.error('ASSERT in %s, %s is :', caller, desc, v);
     }
   }
$("#local_div").resizable();
$("#remote_div").resizable();
