
var request = require('request');


var zip = '94513';
var method = 2;

request(`https://api.aladhan.com/timingsByAddress?address=${zip}&method=${method}`, function(error, response, body){
var parsed = JSON.parse(body);
var imsak = parsed.data.timings.Imsak;
var fajr = parsed.data.timings.Fajr;
var sunrise = parsed.data.timings.Sunrise;
var dhuhr = parsed.data.timings.Dhuhr;
var asr = parsed.data.timings.Asr;
var maghrib = parsed.data.timings.Maghrib;
var isha = parsed.data.timings.Isha;

//can i put all these times in an array instead of separate var's?
console.log(`Imsak: ${imsak}`)
console.log(`Fajr: ${fajr}`);
console.log(`Sunrise: ${sunrise}`);
console.log(`Dhuhr: ${dhuhr}`);
console.log(`Asr: ${asr}`);
console.log(`Maghrib: ${maghrib}`);
console.log(`Isha: ${isha}`);

var currentHour = new Date().getHours();
var currentMinutes = new Date().getMinutes();
var fajrHour = fajr.substr(0,2);
var fajrMinute = fajr.substr(3,5);
//todo: fix this
function timeLeft(){
  a = 57;
  b = fajrMinute;
  console.log(parseInt(b)-parseInt(a));
  console.log(fajrHour-1);
  
  //how can you calculate which salat is next?
  //that way you can set that as a var which is used to calc remaining time.
  
  
}
timeLeft();
console.log(``);



// var hoursLeft = parseInt(fajrHour) - parseInt(currentHour);
// var hourDiff = (parseInt(fajrHour) - parseInt(currentHour))*60;
// var minuteDiff = 60-parseInt(currentMinutes) + parseInt(fajrMinute);
// var timediff = (hourDiff+minuteDiff)%60;
// console.log(`fajr time: ${fajrHour}:${fajrMinute}`);

// console.log(`current time: ${currentHour}:${currentMinutes}\n hour diff: ${hourDiff} minute diff: ${minuteDiff} timeDiff: ${timediff} hoursleft: ${hoursLeft}`);

//take time and figure out which salat is next 
//salat times  exclude imsak & sunrise
//figure out how many hours and minutes left until next salat time


  
});