import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';
import AutoPause from './Plugins/AutoPause.js';
import Ads from './Plugins/Ads/indexAds.js';
const video = document.querySelector('video');
const player = new MediaPlayer({ el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ],
});
const playButton = document.querySelector('button');
playButton.onclick = () => player.togglePlay();
const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    }
    else {
        player.mute();
    }
};
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(error => {
        console.log(error.message);
    });
}
