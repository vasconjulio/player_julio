const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const starboy = {
    songName : 'Starboy',
    artist : 'The Weeknd',
    file : 'starboy',
};

const saveYourTears = {
    songName : 'Save Your Tears',
    artist : 'The Weeknd',
    file : 'save_your_tears',
};

const hills = {
    songName : 'The Hills',
    artist : 'The Weeknd',
    file : 'the_Hills',
};

let isPlaying = false;
const playlist = [starboy,saveYourTears,hills];
let index = 0;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}
function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying == true){
        pauseSong();
    }
    else {
        playSong();
    }
}

function initializeSong(){
    cover.src = `images/${playlist[index].file}.jpg`;
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong(){
    if(index === 0){
    index = playlist.length - 1;
    }
    else {
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong(){
    if(index === playlist.length - 1){
        index - 0;
    }
    else {
        index += 1;
    }
    initializeSong();
    playSong();
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click',previousSong);
next.addEventListener('click', nextSong)