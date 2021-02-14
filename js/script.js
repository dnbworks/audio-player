
var btn = document.querySelector(".btn");
var audio = new Audio("audio/15 How We Doin It (feat. Lil Mosey).m4a");
// var audio = new Audio("audio/shawty_on_dance floor.mp3");
var seekslider = document.getElementById("input-range");

var currenttime = document.getElementById("currenttime");
var durationtime = document.getElementById("durationtime");


btn.addEventListener("click", function(){
    var icon = document.getElementById("playIcon");
    if (audio.paused) {
        audio.play();
        icon.setAttribute("class", "fas fa-pause");
    } else {
        audio.pause();
        icon.setAttribute("class", "fas fa-play");
    }
    
});

audio.addEventListener("timeupdate", function(){
    seektimeupdate();
});

function seektimeupdate(){
    var nt = audio.currentTime * (100 / audio.duration);
    let seekslider = document.getElementById("input-range");
    seekslider.value = nt;

    var fill = document.querySelector(".fill");
    fill.style.width = `${seekslider.value}` + '%';

    
    var curmins = Math.floor(audio.currentTime / 60);
    var cursecs = Math.floor(audio.currentTime - curmins * 60);
    var durmins = Math.floor(audio.duration / 60);
    var dursecs = Math.floor(audio.duration - durmins * 60);
    
    // curmins = (curmins < 10) ? curmins = "0" + curmins : curmins;
    cursecs = (cursecs < 10) ? cursecs = "0" + cursecs : cursecs;
    // durmins = (durmins < 10) ? durmins = "0" + durmins : durmins;
    dursecs = (dursecs < 10) ? dursecs = "0" + dursecs : dursecs;

    currenttime.innerText = curmins + ":" + cursecs;
    durationtime.innerText = durmins + ":" + dursecs;
}

seekslider.addEventListener("input", function(){
    var fill = document.querySelector(".fill");

    fill.style.width = `${this.value}` + '%';

    console.log(this.value);

});

seekslider.addEventListener("input", function(e){
    // seekslider.value = e.clientX - seekslider.offsetLeft;
    var seeko = audio.duration * (seekslider.value / 100);
    audio.currentTime = seeko;
});

var volume = document.getElementById("volume");

volume.addEventListener("input", function(){
    audio.volume = volume.value / 100;
});


window.onload = seektimeupdate;