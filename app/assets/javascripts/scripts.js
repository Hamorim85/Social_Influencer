jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Countdown
    // -------------------------------------------------------------
    (function () {

        $("#back-countdiown").countdown({
            date: "20 april 2018 12:00:00",
            format: "on"
        });

    }());


}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})