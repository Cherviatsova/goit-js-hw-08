import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const time = localStorage.getItem(STORAGE_KEY);
const parsedTime = JSON.parse(time);

player.on('timeupdate', throttle(updateTime, 1000));

function updateTime(event) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(event));
}

function startVideo() {
  if (parsedTime === null) {
    return;
  }
  const startTime = parsedTime.seconds;

  player
    .setCurrentTime(startTime)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}
startVideo();
