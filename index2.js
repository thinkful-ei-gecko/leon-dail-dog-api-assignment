'use strict';

function displayImages(data) {
  $('#info').text(`${data.message.length} Results`);
  for (let i=0;i<data.message.length;i++) {
    console.log(data.message[i]);
    $('#results-list').append(`
      <li><img src="${data.message[i]}" alt="random dog picture" /></li>
    `);
  }
}

function checkSubmit() {
  $('#dog-pics').on('submit', e=> {
    e.preventDefault();
    let picsNumber = $('#number-choice').val().toLowerCase();

    fetch(`https://dog.ceo/api/breeds/image/random/${picsNumber}`)
      .then(response => {
        if (response.ok) { return response.json(); }
        throw new Error('Had a problem!');
      })
      .then (responseJson => displayImages(responseJson))
      .catch(e => $('#info').text(`${e}`) );
  });
}

function listener() {
  checkSubmit();
}

$(listener);