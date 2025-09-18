// simply create a timer that saves as you pause. its gonna be great. idk how its gonna be saved and such??

var { Timer } = require('lib/easytimer/dist/easytimer.min.js');

var mainTimer = new Timer();
timer.start({precision: 'seconds'});
timer.addEventListener('secondsUpdated', function (e) {
    $('#mainTimer .days').html(timer.getTimeValues().days);
    $('#mainTimer .hours').html(timer.getTimeValues().hours);
    $('#mainTimer .minutes').html(timer.getTimeValues().minutes);
    $('#mainTimer .seconds').html(timer.getTimeValues().seconds); // okay so i'll figure out how this works??
});
