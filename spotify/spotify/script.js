console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName:"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"couple-6976409_1280.jpg"},
    {songName:"Salam-e-Ishq",filePath:"song/2.mp3",coverPath:"couple-6976409_1280.jpg"},
    {songName:"Salam-e-Ishq",filePath:"song/3.mp3",coverPath:"couple-6976409_1280.jpg"},
    {songName:"Salam-e-Ishq",filePath:"song/4.mp3",coverPath:"couple-6976409_1280.jpg"},
    {songName:"Salam-e-Ishq",filePath:"song/5.mp3",coverPath:"couple-6976409_1280.jpg"},
    {songName:"Salam-e-Ishq",filePath:"song/6.mp3",coverPath:"couple-6976409_1280.jpg"},
    {songName:"Salam-e-Ishq",filePath:"song/7.mp3",coverPath:"couple-6976409_1280.jpg"},
    {songName:"Salam-e-Ishq",filePath:"song/8.mp3",coverPath:"couple-6976409_1280.jpg"},
    {songName:"Salam-e-Ishq",filePath:"song/9.mp3",coverPath:"couple-6976409_1280.jpg"},
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement/100;
})
