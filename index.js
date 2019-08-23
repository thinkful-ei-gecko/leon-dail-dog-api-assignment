'use strict';

function checkData(jsonData) {
  $('#info').text('Results');
  $('#results-list').html(`<img src="${jsonData.message}" alt="Random dog picture" />`);
}

function logResponse() {
  $('#dog-api-test').on('submit', e => {
    e.preventDefault();
    $('#results-list').empty();
    let data = $('#dog-breed-choice').val().toLowerCase();
    let url = `https://dog.ceo/api/breed/${data}/images/random`;
    fetch(url)
      .then(response => {
        if (response.ok) { return response.json(); }
        throw new Error('Had an error');})
      .then(jsonData => checkData(jsonData))
      .catch(err => $('#info').text(err));
  });
}

function listener() {
  logResponse();
}

$(listener);