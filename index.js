'use strict';

function displayImages(jsonData) {
  console.log(jsonData);
  $('#display-images').append(`<div class="dog-pic"><img src="${jsonData.message}" alt="random dog image" /></div>`);
}
function logResponse() {
  $('#dog-api-test').on('submit', e => {
    e.preventDefault();
    console.log('this far');
    let timesWeCycle = $('#number-of-pics').val();
    for (let i=0;i<timesWeCycle;i++) {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(jsonData => displayImages(jsonData));
    }
  });
}

function listener() {
  logResponse();
}

$(listener);