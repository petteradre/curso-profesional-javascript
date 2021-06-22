import MediaPlayer_1 from "./MediaPlayer.js";
import AutoPlay_1 from "./Plugins/AutoPlay.js";
import AutoPause_1 from "./Plugins/AutoPause.js";
var video = document.querySelector('video');
var player = new MediaPlayer_1({ el: video,
    plugins: [
        new AutoPlay_1(),
        new AutoPause_1()
    ],
});
var playButton = document.querySelector('button');
playButton.onclick = function () { return player.togglePlay(); };
var muteButton = document.querySelector('#muteButton');
muteButton.onclick = function () {
    if (player.media.muted) {
        player.unmute();
    }
    else {
        player.mute();
    }
};
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(function (error) {
        console.log(error.message);
    });
}
