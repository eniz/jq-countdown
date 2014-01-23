/*! countDownJS for WorldCup 2014 - v0.1 - 2014
* http://www.worldcup2014..com/
* Copyright (c) 2014 Eniz Gülek; Licensed MIT
*/
(function ($) {
    $.fn.countdown = function(options, callback) {

        // base 'this' selector
        base = $(this);

        // settings
        var settings = {
            'date': null,
            'format': null
        };

        // append the settings array to options
        if (options) {
            $.extend(settings, options);
        }

        // main countdown function
        function countdown_proc() {

            eventDate = Date.parse(settings['date']) / 1000;
            currentDate = Math.floor($.now() / 1000);

            if (eventDate <= currentDate) {
                callback.call(this);
                clearInterval(interval);
            }
            // Kalan saniye
            seconds = eventDate - currentDate;

            days    = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
            seconds -= days * 60 * 60 * 24; // update the seconds variable with no. of days removed

            hours = Math.floor(seconds / (60 * 60));
            seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed

            minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60; //update the seconds variable with no. of minutes removed
 
            // conditional Ss
            if (days == 1)
                base.find(".timeRefDays").text("day");
            else
                base.find(".timeRefDays").text("days");
            if (hours == 1)
                base.find(".timeRefHours").text("hour");
            else
                base.find(".timeRefHours").text("hours");
            if (minutes == 1)
                base.find(".timeRefMinutes").text("minute");
            else
                base.find(".timeRefMinutes").text("minutes");
            if (seconds == 1)
                base.find(".timeRefSeconds").text("second");
            else
                base.find(".timeRefSeconds").text("seconds");

            // update the countdown's html values
            if (!isNaN(eventDate)) {
                base.find(".dayCount").text(days);
                base.find(".hourCount").text(hours);
                base.find(".minuteCount").text(minutes);
                base.find(".secondCount").text(seconds);
            } else {
                alert("Geçersiz tarih! Örnek: 12 June 2014 14:30:00");
                clearInterval(interval);
            }
        }

        // run the function
        countdown_proc();

        // main function is setting interval
        interval = setInterval(countdown_proc, 1000);

    };
}) (jQuery);