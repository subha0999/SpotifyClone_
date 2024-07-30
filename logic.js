
console.log("hello");
let songIndex =0;
let masterPlay= document.getElementById('masterPlay');
let ProgressBar= document.getElementById('ProgressBar');
let gif= document.getElementById('gif');
let audioElement = new Audio('songs/1.mp3');
let mastersongname=document.getElementById('mastersongname');
let next = document.getElementById('next');
let previous =document.getElementById('previous');
//audioElement.play

let  songitem = Array.from(document.getElementsByClassName('songitem'));



let songs = [
    {songName: "Royalty By Maestro Chives", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},

    
    {songName: "Mortals By Warriyo", filepath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    
   
    {songName: "Invincible By Deaf Kev", filepath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "My Heart By EH!DE", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Heros Tonight By Janji", filepath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Fade By dashie", filepath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ouverture By DJ Genki", filepath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mortals By Warriyo", filepath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "On & On by Jeja", filepath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Alejandro By LadyGaga", filepath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    
    
];



 

//masterPlay button handle


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    
})




audioElement.addEventListener('timeupdate', () => {
   
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
   
    ProgressBar.value=progress;
});

ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(ProgressBar.value*audioElement.duration)/100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      
        makeAllPlays();
        
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       
        audioElement.src =`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    });
});



next.addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex+=1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
});

previous.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex-=1;
    }
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
  
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
});


