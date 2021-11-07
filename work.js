var WakeUp= 8;
var noon = 12 ;
var Lunch= 3;
var Evening = 18;
var Sleep = 10;

function myclock() {
    var myday = new Date();
    var myhour = myday.getHours();
    var mymin = myday.getMinutes();
    var mysec = myday.getSeconds();
    var meridian = "AM";

    if (myhour>=noon) {

        meridian = "PM";
        }
        if (myhour>noon) {
            myhour= myhour - 12 ;
            };

    myhour = checkTime(myhour)
    mymin = checkTime(mymin)
    mysec = checkTime(mysec)
    
    document.getElementById("asd").innerHTML = myhour + ":" + mymin + ":" +mysec + " " + meridian
    
    setTimeout(function () {
        myclock(); 
    },1000)    
}

function checkTime(x) {
    if (x<10) {x="0"+x;}
    return x
}    

window.onload = function myloaded() {    
    myclock();
}

function ClockImages() {
    var time = new Date();
    var myTime = time.getHours();
    var MassegeText;
    var image = "https://cdn1.vectorstock.com/i/1000x1000/06/25/have-a-good-day-black-and-white-hand-lettering-vector-13700625.jpg";
    var DefaultImage = document.getElementById("DefaultImage");

    if (time==WakeUp) {
        image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        MassegeText="Good Morning";
        }
        else if (time==Lunch) {
            image="https://t4.ftcdn.net/jpg/00/87/10/29/360_F_87102935_vrUVBCynk8hEWYtQGrlRi6Od8OnU2ARn.jpg";
            MassegeText="lunch time!";
        }
        else if (time==Sleep) {
            image="https://previews.123rf.com/images/matahiasek/matahiasek1605/matahiasek160500124/58646575-minimalistic-illustration-of-a-clock-with-time-for-sleep-text-isolated-on-white-background-clock-cli.jpg";
            MassegeText="Sleep well";
        }
   
}

var WakeUpTimeSelect =document.getElementById("WakeUpTimeSelect");

var WakeUpTime= function () {
    WakeUp=WakeUpTimeSelect.value;
};
WakeUpTimeSelect.addEventListener("change",WakeUpTime)

var LunchTimeSelect=document.getElementById("LunchTimeSelect");
var LunchTime= function () {
    Lunch=LunchTimeSelect.value;
};
LunchTimeSelect.addEventListener("change",LunchTime);

var SleepTimeSelect =document.getElementById("SleepTimeSelect");
var SleepTime= function () {
    Sleep=SleepTimeSelect.value;
};
SleepTimeSelect.addEventListener("change",SleepTime);
