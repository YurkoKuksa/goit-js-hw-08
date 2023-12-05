import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');

const CURRENT_TIME = 'videoplayer-current-time';
const player = new Player(iframe);
console.log('iframe');

const play = function (data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
  console.log(data);
};

player.on('timeupdate', throttle(play, 2000));

const currentTime = Number(localStorage.getItem(CURRENT_TIME));

player.setCurrentTime(currentTime);
