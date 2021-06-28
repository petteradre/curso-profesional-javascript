import MediaPlayer from './MediaPlayer';
import AutoPlay from './Plugins/AutoPlay';
import AutoPause from './Plugins/AutoPause';
import Ads from './Plugins/Ads/indexAds';

      const video = document.querySelector('video');
      const player = new MediaPlayer({el: video, 
             plugins:
             [
                   new AutoPlay(),
                   new AutoPause(),
                   new Ads()
             ],
            });
      const playButton: HTMLElement = document.querySelector('button');
      playButton.onclick = () => player.togglePlay();
      const muteButton: HTMLElement = document.querySelector('#muteButton');
      muteButton.onclick = () =>{
            if(player.media.muted){
                  player.unmute();
            }else{
                  player.mute();
            }
      }
      if('serviceWorker' in navigator){
            navigator.serviceWorker.register('sw.js').catch(error=>{
                  console.log(error.message);
            })
      }
