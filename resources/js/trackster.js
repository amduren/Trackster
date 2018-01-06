var Trackster = {};
const API_KEY = 'aa0ed3e2abeef58b4cb8426031c9e6cb';

$(document).ready(function () {
  $('#search-button').on('click', function () {
    var searchText = $('#search-input').val();
    Trackster.searchTracksByTitle(searchText);
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    success: function(response) {
      //Trackster.renderTracks(response);
    }
  });
};
