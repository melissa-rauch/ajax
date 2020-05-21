 "use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    $('#fortune-text').text(response);
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    // TODO: select the zipcode input
    zipcode: $('zipcode-field').val()
  };

  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  $.get('/weather', formData, (response) => {
    $('#weather-info').html(response.forecast);
  });

  // $.post('/weather', formData, (response) => {
  //   alert(res)
  // });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  const formInputs = {
    'melon' : $('#melon-type-field').val(), 
    'qty' :  $('#qty-field').val()
  };

  $.post('/order-melons', formInputs, (response) => {
    alert(response.code);
    alert(response.msg);
  });
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
