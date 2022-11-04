const days = document.getElementById("days");
const hours= document.getElementById("hours"); 
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");



const currentTime = new Date().getDate();

const Eventtime = new Date("February 26 2023, 20:59:59");


function Countdown() {
    const currentTime = new Date();
    const diff = Eventtime - currentTime;
    const d = Math.floor(diff / 1000 / 60  /60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) %24;
    const m = Math.floor(diff / 1000 / 60) %60;
    const s = Math.floor(diff / 1000) %60;
    console.log(d)
    console.log(h)

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h ;
    mins.innerHTML = m < 10 ? '0' + m : m ;
    secs.innerHTML = s < 10 ? '0' + s : s ;
}

setInterval(Countdown, 1000);

