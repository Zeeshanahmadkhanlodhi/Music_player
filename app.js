const songs = [
    'bensound-anewbeginning.mp3',
    'bensound-creativeminds.mp3',
    'bensound-cute.mp3',
    'bensound-happyrock.mp3',
    'bensound-hey.mp3',
    'bensound-ukulele.mp3',
    'bensound-littleidea.mp3',
    'bensound-jazzyfrenchy.mp3'
];


function createSongList() {
    const list = document.createElement("ol");
    for(let i=0; i<songs.length;i++){
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);


    }
    return list

}

const songlist = document.getElementById('songList');
songlist.appendChild(createSongList())

songlist.onclick  =  function(e){
    const source = document.getElementById("source");
    source.src = "songs/"+e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;


    const player = document.getElementById("player")
    player.load();
    player.play();
}


function playAudio() {
    if(player.readyState){
        player.play();
    }

}

function pauseAudio(){
    player.pause();
}

const slider = document.getElementById("volumeSlider")
slider.oninput = function(e){
    const volume = e.target.value;
    player.volume = volume;
}
function updateProgress() {
 if(player.currentTime > 0){
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100
 }
   

}