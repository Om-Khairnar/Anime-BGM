console.log("Welcome to Spotify");

// initalize the Variables
let songIndex = 0;
// audio element play
let audioElement = new Audio('songs/1.mp3');

let masterPlay =document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: " Ultra Instinct Theme (Official Version)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dragon ball z title song in hindi", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Death Note - Ryuks Theme Music ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Death Note - Lights Theme Music ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Death Note - L's Theme A Music", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "One Piece Binks Sake - English ver", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Naruto_Flute_beatbox", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Jujutsu Kaisen Opening 1", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Suzume no Tojimari Suzume Theme Song", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Dragon Ball Super English", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
 



//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 1;
    }
})

//listen to Events
audioElement.addEventListener('timeupdate',()=>{
  // here we are updating the seekbaar
  process = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProcessBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  } )
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
