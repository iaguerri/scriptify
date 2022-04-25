const songsList = [
  "https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3",
  "https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3",
  "https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3"
];

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let url = songsList[0];
let song = new Audio(url);
let currentSong = 0;

const prepareSong = () => {
  song.pause();
  url = songsList[currentSong];
  song = new Audio(url);
};

const playSong = () => {
  prepareSong();
  song.play();
  updateSongData();
};

const pauseSong = () => {
  song.pause();
};

const prevSong = () => {
  if (currentSong > 0) {
    currentSong--;
  }
  playSong();
};

const nextSong = () => {
  if (currentSong < songsList.length - 1) {
    currentSong++;
  }
  playSong();
};

const updateSongData = () => {
  const name = songsList[currentSong];
  const cleanSong = cleanName(name);
  document.querySelector(".song-name").textContent = cleanSong;
  const artist = "Monkey Island";
  document.querySelector(".song-artist").textContent = artist;
};

const cleanName = (url) => {
  const text = url
    .replace("https://scummbar.com/mi2/MI1-CD/", "")
    .replace(".mp3", "")
    .replaceAll("%20", " ");
  return text;
};

playButton.addEventListener("click", () => playSong());
pauseButton.addEventListener("click", () => pauseSong());
prevButton.addEventListener("click", () => prevSong());
nextButton.addEventListener("click", () => nextSong());
