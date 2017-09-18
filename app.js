var http = require('http');
var request = require('request');
var moment = require('moment');

var address = '1441 paradise lane, brentwood, CA';
var method = 2;

request(`https://api.aladhan.com/timingsByAddress?address=${address}&method=${method}`, function(error, response, body){

var imsak = JSON.parse(body).data.timings.Imsak;
var fajr = JSON.parse(body).data.timings.Fajr;
var sunrise = JSON.parse(body).data.timings.Sunrise;
var dhuhr = JSON.parse(body).data.timings.Dhuhr;
var asr = JSON.parse(body).data.timings.Asr;
var maghrib = JSON.parse(body).data.timings.Maghrib;
var isha = JSON.parse(body).data.timings.Isha;

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

console.log(`current time: ${currentHour}:${currentMinutes}`);

//take time and figure out which salat is next 
//salat times  exclude imsak & sunrise
//figure out how many hours and minutes left until next salat time


  
});