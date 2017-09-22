var request = require('request');


var zip = '94513';
var method = 2;

request(`https://api.aladhan.com/timingsByAddress?address=${zip}&method=${method}`, function (error, response, body) {
  var parsed = JSON.parse(body);
  var timings = parsed.data.timings;
  var currentHour = new Date().getHours();
  var currentMinutes = new Date().getMinutes();
  var minutesSinceMidnight = currentHour * 60 + currentMinutes;

  console.log('\n    Salat Times    ');
  console.log('*******************');
  console.log(`Fajr: ${timings.Fajr}`);
  console.log(`Dhuhr: ${timings.Dhuhr}`);
  console.log(`Asr: ${timings.Asr}`);
  console.log(`Maghrib: ${timings.Maghrib}`);
  console.log(`Isha: ${timings.Isha}`);
  console.log('*******************');
  console.log(`Current time: ${currentHour}:${currentMinutes}`);


  var minutes = {};
  for (var k in timings) {
    var hour = timings[k].substr(0, 2);;
    var minute = timings[k].substr(3, 5);
    minutes[k] = hour * 60 + parseInt(minute);
  };



  var next = "";

  if (minutes.Fajr > minutesSinceMidnight) {
    var next = 'Fajr';

  } else if (minutes.Dhuhr > minutesSinceMidnight) {
    var next = 'Duhr';

  } else if (minutes.Asr > minutesSinceMidnight) {
    var next = 'Asr';

  } else if (minutes.Maghrib > minutesSinceMidnight) {
    var next = 'Maghrib';

  } else if (minutes.Isha > minutesSinceMidnight) {
    var next = 'Isha';

  } else {
    var tomorrow = Date.now() / 1000;
    request(`https://api.aladhan.com/timingsByAddress/${tomorrow}?address=${zip}&method=${method}`, function (error, response, body) {
      var parsed = JSON.parse(body);
      var Fajr = parsed.data.Fajr;
      var hour = Fajr.substr(0, 2);;
      var minute = Fajr.substr(3, 5);
      //1440 is how minutes in a day
      var timeLeft = 1440 - minutesSinceMidnight + (60 * hour) + parseInt(minute);
      var hour = Math.floor(timeLeft / 60);
      var minute = timeLeft % 60;
      if (minute < 10) {
        minute = "0" + minute;
      } else {
        minute = parseInt(minute);
      }

      console.log(`Time remaining until ${next}: ${hour}:${minute}`);

    });
  }


  var timeLeft = minutes[next] - minutesSinceMidnight;
  var hour = Math.floor(timeLeft / 60);
  var minute = timeLeft % 60;
  if (minute < 10) {
    minute = "0" + minute;
  } else {
    minute = parseInt(minute);
  }

  console.log(`Time remaining until ${next}: ${hour}:${minute} \n`);
});