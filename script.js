if('webkitAudioContext' in window) {
    var myAudioContext = new webkitAudioContext();
}

request = new XMLHttpRequest();
request.open('GET', 'sound.mp3', true);
request.responseType = 'arraybuffer';
request.addEventListener('load', bufferSound, false);
request.send();

var mySource;
function bufferSound(event) {
    var request = event.target;
    var source = myAudioContext.createBufferSource();
    source.buffer = myAudioContext.createBuffer(request.response, false);
    mySource = source;
    mySource.connect(myAudioContext.destination);
    mySource.noteOn(0);
}


// var context = new webkitAudioContext();

// function loadSound(url, ctx, onSuccess, onError) {
//     // init request
//     var request = new XMLHttpRequest();
//     request.open('GET', url, true);
//     request.responseType = 'arraybuffer'; // <= here secret sauce!

//     // function called once data is loaded
//     request.onload = function(){
//         // request.response === encoded... so decode it now
//         ctx.decodeAudioData(request.response, function(buffer) {
//             onSuccess && onSuccess(buffer);
//   }, function(){
//             onError && onError();
//         });
//     }

//     request.send(); // Start the request
// }

// function playSound(ctx, buffer) {
//     // create a 'bufferSource' node
//     var source = ctx.createBufferSource();
//     // setup the buffer
//     source.buffer = buffer;
//     // connect it to context destination
//     source.connect(ctx.destination);
//     // play immediatly
//     source.noteOn(0);
// }