console.log("arraymethods.js");

let artists = ["Charli", "Halsey", "Harry Hudson", "The Weeknd", "Bastille", "Justin Timberlake", "Twenty One Pilots", " Taylor Swift", "Hozier", "Drake"];

let songs = ["Out 0f my head", "Bad at Love", "Gone", "Secrets", "Glory", "Supplies", "Stressed Out", "Look What You Made Me Do", "Take Me To Church", "Diplomatic Immunity"];

let albums = ["Pop 2", "Hopeless Fountain Kingdom", "Hudson", "Starboy", "Wild World", "Man of the Woods", "Blurryface", "Reputation", "Hozier album", "Scary Hours"];


const artistList = document.getElementById("artists");
artists.forEach(function(artist) {
    artistList.innerHTML += `<ul><li>
                         ${artist} 
                          </li></ul>`
       
});
console.log(artistList);

const songList = document.getElementById("songs");
songs.forEach(function(song) {
    songList.innerHTML += `<ul><li>
                         ${song} 
                          </li></ul>`
});
console.log(songList);

const albumList = document.getElementById("albums");
albums.forEach(function(album) {
    albumList.innerHTML += `<ul><li>
                         ${album} 
						  </li></ul>`;
						  
});
console.log(albumList);
/*Using a form; Add 2 more songs.

Each artist should be added to the beginning of the artist array.

For each output element arrange the corresponding data as follows:
VD Output vertically descending alphabetically.
VA Output vertically ascending alphabetically.
Output vertically exactly as the data was added.
reverse Output vertically exactly as the data was added, inverted.
join(,)Output horizontally descending alphabetically, separated by ,.
Output horizontally ascending alphabetically, separated by >>.
Output horizontally exactly as the data was added, separated by :.
Output horizontally exactly as the data was added, inverted, separated by |.
Each output area should be separated by a headline tag.*/

//button that submits & adds to the list below
let addNew = document.getElementById("btn-addToList");
addNew.addEventListener("click", function(){
	var newToList = document.getElementById("addToTheList").value;
	////(addToList) is the radio button for selecting song, artist, album
	var listSelected;
	var radios = document.getElementsByName('whichList');
	for (var i = 0; i < radios.length; i++) {
		// radios option are 1 = song, 2 = album, 0 = artist
	    if (radios[i].checked) {
	        listSelected = radios[i].value;
	        break;
	    }
	}
	console.log("listSelected", listSelected);
	if (Number(listSelected) === 0){
		console.log("zero");
		addArtist(newToList);
        //console.log("new artist list", getArtist());

	}else if (Number(listSelected) === 1){
		console.log("one");
		addSong(newToList);
		
		//console.log("newsonglist", addSong());
	}else if (Number(listSelected) === 2){
		console.log("two");
		addAlbum(newToList);
		//console.log("new Album list", addAlbum());
	}
});

//Each artist should be added to the beginning of the artist array.
//the artist in the console log is being added to the beginning of the array but 
//in the DOM it is being added to the end of the list.
let addArtist = function(a){
	artists.unshift(a);
	console.log("new artists list", artists);
	return artistList.innerHTML += `<ul><li>${a}</li></ul>`;
};

//Each song should be added to the end of the song array.

let addSong = function(s){
	songs.push(s);
	console.log("new song list", songs);
	return songList.innerHTML += `<ul><li>${s}</li></ul>`;
};


//Each album should be added to the end of the album array.
let addAlbum = function(al){
	albums.push(al);
	console.log("new albums list", albums);
	return albumList.innerHTML  += `<ul><li>${al}</li></ul>`;
};
