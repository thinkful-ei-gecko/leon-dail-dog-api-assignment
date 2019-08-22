'use strict';

function checkData(jsonData, data) {
  console.log(jsonData);
  let text = '';
  if (jsonData.status !== 'success') {
    text = 'We could not find that breed! Try again!';
  }
  else {
    text = `<img src="${jsonData.message}" alt="${data} picture" />`
  }
  $('#display-images').html(text);
}
function logResponse() {
  $('#dog-api-test').on('submit', e => {
    e.preventDefault();

    //handle the input data
    let data = $('#dog-breed-choice').val().toLowerCase();
    console.log(data);
    fetch(`https://dog.ceo/api/breed/${data}/images/random`)
      .then(response => response.json())
      .then(jsonData => checkData(jsonData, data));
  });
}

function listener() {
  logResponse();
}

$(listener);