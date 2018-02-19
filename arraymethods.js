console.log("arraymethods.js");

let artists = ["Charli", "Halsey", "Harry Hudson", "The Weeknd", "Bastille", "Justin Timberlake", "Twenty One Pilots", " Taylor Swift", "Hozier", "Drake"];

let songs = ["Out 0f my head", "Bad at Love", "Gone", "Secrets", "Glory", "Supplies", "Stressed Out", "Look What You Made Me Do", "Take Me To Church", "Diplomatic Immunity"];

let albums = ["Pop 2", "Hopeless Fountain Kingdom", "Hudson", "Starboy", "Wild World", "Man of the Woods", "Blurryface", "Reputation", "Hozier album", "Scary Hours"];

const artistList = document.getElementById("artists");

artists.forEach(function(artist) {
    artistList.innerHTML += `<ul><li>
                         ${artist} 
                          </li></ul>`
       //console.log(artists);
});

const songList = document.getElementById("songs");

songs.forEach(function(song) {
    songList.innerHTML += `<ul><li>
                         ${song} 
                          </li></ul>`
       
});
//console.log(songs);

const albumList = document.getElementById("albums");

albums.forEach(function(album) {
    albumList.innerHTML += `<ul><li>
                         ${album} 
                          </li></ul>`
       
});
console.log(albumList);
/*Using a form; Add 2 more songs.
Each song should be added to the end of the song array.
Each artist should be added to the beginning of the artist array.
Each album should be added to the end of the album array.
For each output element arrange the corresponding data as follows:
Output vertically descending alphabetically.
Output vertically ascending alphabetically.
Output vertically exactly as the data was added.
Output vertically exactly as the data was added, inverted.
Output horizontally descending alphabetically, separated by ,.
Output horizontally ascending alphabetically, separated by >>.
Output horizontally exactly as the data was added, separated by :.
Output horizontally exactly as the data was added, inverted, separated by |.
Each output area should be separated by a headline tag.*/
let addNew = document.getElementById("btn-addToList");
addNew.addEventListener("click", function(){
addArtist(newToList);

getArtist();
	var newToList = document.getElementById("addToList").value;
	//which side
	var listSelected;
	var radios = document.getElementsByName('whichList');
	for (var i = 0, length = radios.length; i < length; i++) {
		// 1 = song, 2 = album, 0 = artist
	    if (radios[i].checked) {
	        listSelected = radios[i].value;
	        break;
	    }
	}
	console.log("listSelected", listSelected);
	if (Number(listSelected) === 0){
		addArtist(newToList);
        //console.log("new jedi list", lightside.getJedi());
         console.log("new artist list", getArtist());

	}else if (Number(listSelected) === 1){
		console.log("one");
		lightside.setPlayer(newPlayerName);
		console.log("new player list", lightside.getPlayer());
	}else if (Number(listSelected) === 2){
		darkside.setEvil(newPlayerName);
		console.log("new evil list", darkside.getEvil());
	}
});



