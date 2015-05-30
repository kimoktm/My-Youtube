// Add Search Placeholder
searchPlaceHolder();

// Hide Video Controls
// hideControls();

// Hide controls across site
document.body.onclick = timeOutHide;


function timeOutHide() {
	// setTimeout(function(){ hideControls(); }, 4000);
}

function hideControls() {
	var moviePlayer = document.getElementById('movie_player');
	if (typeof(moviePlayer) != 'undefined' && moviePlayer != null) {
		moviePlayer.className  = moviePlayer.className + " ideal-aspect";
	}
}

function searchPlaceHolder() {
	var searchInput = document.getElementById('masthead-search-term');
	if (typeof(searchInput) != 'undefined' && searchInput != null) {
		searchInput.setAttribute('placeholder', "Search here");
	}
}