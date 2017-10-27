"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', function (results) {
        $('#fortune-text').html(results);
    });
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function (results) {
        $('#weather-info').html(results.forecast);
    });
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    let formInputs = {
        'qty': $('#qty-field').val(),
        'melon_type': $('#melon-type-field').val(),
    };

    $.post('/order-melons.json',
        formInputs,
        function (results) {
            $('#order-status').html(results.msg);
            if ( results['code'] !== 'OK' ) {
                $('#order-status').css("color", "red");
            }
        });
}

$("#order-form").on('submit', orderMelons);


