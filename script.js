var body = document.getElementsByTagName('body')[0];
var time = Date.now();
var timeTo = time + 360001000; //Время до события в миллисекундах
var hours = [document.getElementById('hours_first'), document.getElementById('hours_second')];
var minutes = [document.getElementById('minutes_first'), document.getElementById('minutes_second')];
var seconds = [document.getElementById('seconds_first'), document.getElementById('seconds_second')];
var hour;
var minute;
var second;

function changeTime() {
    time = timeTo - Date.now();

    hour = Math.floor(time/3600000);
    hours[0].textContent = 0;
    hours[1].textContent = hour - Math.floor(hour/10)*10;

    minute = Math.floor(time/60000) - hour*60;
    minutes[0].textContent = Math.floor(minute/10);
    minutes[1].textContent = minute - Math.floor(minute/10)*10;

    second = Math.floor(time/1000) - hour*60*60 - minute*60;
    seconds[0].textContent = Math.floor(second/10);
    seconds[1].textContent = second - Math.floor(second/10)*10;

    if(seconds[0].textContent == 0 & seconds[1].textContent == 0  & minutes[0].textContent == 0 & minutes[1].textContent == 0 & hours[0].textContent == 0 & hours[1].textContent == 0) {
        clearInterval(timer);
        alert('Упс! Кажется что-то пошло не так...');
        timeTo = Date.now() + 36002000;
        timer = setInterval(changeTime, 1000);
    }
}

var timer = setInterval(changeTime, 1000); //Интервал обновления таймера в миллисекундах
