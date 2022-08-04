let myName = document.querySelector("#myName");

let isim = prompt("Adınız Nedir?");

isim = isim.replace(`${isim[0]}`, isim.slice(0,1).toLocaleUpperCase());

myName.innerHTML = isim;

let myClock = document.querySelector("#myClock");

function showTime(){

    let saat = new Date();
    let h = saat.getHours();
    let m = saat.getMinutes();
    let s = saat.getSeconds();

    if (m < 10){
        m = `0${m}`;
    
    }else if (s < 10){
        s = `0${s}`;
    }
   
    myClock.innerHTML = h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);
   
};

showTime();