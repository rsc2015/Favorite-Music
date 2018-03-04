console.log("arraymethods.js");

let artists = ["Charli", "Halsey", "Harry Hudson", "The Weeknd", "Bastille", "Justin Timberlake", "Twenty One Pilots", " Taylor Swift", "Hozier", "Drake"];

let songs = ["Out 0f my head", "Bad at Love", "Gone", "Secrets", "Glory", "Supplies", "Stressed Out", "Look What You Made Me Do", "Take Me To Church", "Diplomatic Immunity"];

let albums = ["Pop 2", "Hopeless Fountain Kingdom", "Hudson", "Starboy", "Wild World", "Man of the Woods", "Blurryface", "Reputation", "Hozier album", "Scary Hours"];


let artistList = document.getElementById("artists");
artists.forEach(function(artist) {
    artistList.innerHTML += `<ul><li>${artist}</li></ul>`                  
});
console.log(artistList);

let songList = document.getElementById("songs");
songs.forEach(function(song) {
    songList.innerHTML += `<ul><li>${song} </li></ul>`
});
console.log(songList);

let albumList = document.getElementById("albums");
albums.forEach(function(album) {
    albumList.innerHTML += `<ul><li> ${album}</li></ul>`;						  
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
	////(id=addToList) is the input field where the song/album/artist 
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
		return addArtist(newToList);

	}else if (Number(listSelected) === 1){
		console.log("one");
		return addSong(newToList);
		//console.log("newsonglist", addSong());
	}else if (Number(listSelected) === 2){
		console.log("two");
		return addAlbum(newToList);
		//console.log("new Album list", addAlbum());
	}
});

// Arrays as added
// let songsAsAdded = [];
// let artistsAsAdded = [];
// let albumsAsAdded = [];
//Each artist should be added to the beginning of the artist array.
//the artist in the console log is being added to the beginning of the array but 
//in the DOM it is being added to the end of the list.
let addArtist = function(a){
	//let artistsAsAdded = [];
	for(var i = 0; i < artists.length; i++){
	artists.unshift(a);
	//artistsAsAdded[i] = artists[i];
	console.log("new artists list", artists);
	//return artistList.innerHTML += ` <ul><li>${a}</li></ul>`;
	artistList.innerHTML += artists[i];
}
};
document.getElementById("artists").innerHTML =  addArtist();

//Each song should be added to the end of the song array.

let addSong = function(s){
	songs.push(s);
	console.log("new song list", songs);
	songList += `<ul><li>${s}</li></ul>`;
	
};


//Each album should be added to the end of the album array.
let addAlbum = function(al){
	albums.push(al);
	console.log("new albums list", albums);
	return albumList.innerHTML  += `<ul><li>${al}</li></ul>`;
};

// cb1 Vertically descending Output vertically descending alphabetically.
// cb2 VA Output vertically ascending alphabetically.
// cb3 Output vertically exactly as the data was added.
// cb4 reverse Output vertically exactly as the data was added, inverted.
// cb5 join(,)Output horizontally descending alphabetically, separated by ,.
// cb6 Output horizontally ascending alphabetically, separated by >>.
// cb7  Output horizontally exactly as the data was added, separated by :.
// cb8 Output horizontally exactly as the data was added, inverted, separated by |


//let addNew = document.getElementById("btn-addToList");

function checkBox1() {
var x = document.getElementById("allList").querySelectorAll("li");
x.sort();
}

// //cb1 Vertically descending Output vertically descending alphabetically.
// let vdBtn = document.getElementById(cb1).addEventListener("click", checkBox1);

// //cb2 VA Output vertically ascending alphabetically.
// let vaBtn = document.getElementById(cb2).addEventListener("click", checkBox2);

// // cb3 Output vertically exactly as the data was added.
// let asisVBtn = document.getElementById(cb3).addEventListener("click", checkBox3); 

// //cb4 reverse Output vertically exactly as the data was added, inverted.
// let revVBtn = document.getElementById(cb4).addEventListener("click", checkBox4);

// //cb5 Output horizontally descending alphabetically, separated by ,
// let ohdBtn = document.getElementById(cb5).addEventListener("click", checkBox5);

// //cb6 Output horizontally ascending alphabetically, separated by >>
// let ohaBtn = document.getElementById(cb6).addEventListener("click", checkBox6);

// //cb7  Output horizontally exactly as the data was added, separated by :
// let asisHBtn = document.getElementById(cb7).addEventListener("click", checkBox7); 

// // cb8 Output horizontally exactly as the data was added, inverted, separated by |
// let asisHrevBtn = document.getElementById(cb8).addEventListener("click", checkBox8); 


var displaySelected;
	var selectBtn = document.getElementsByName('displayHow');
	console.log("selectBtn", selectBtn);
	for (var i = 0; i < selectBtn.length; i++) {
		// radios option are child1 to child8
		selectBtn[i].onClick = f;
	    if (selectBtn[i].checked) {
		   displaySelected = selectBtn[i].value;
		   console.log("displaySelected");
	    }
	}
	//console.log("displaySelected", displaySelected);
	// if (Number(displaySelected) === child1){
	// 	console.log("cb1");
	// 	//return addArtist(newToList);
    //     //console.log("new artist list", getArtist());
	// }else if (Number(displaySelected) === child2){
	// 	console.log("cb2");
	// 	//return addSong(newToList);
	// 	//console.log("newsonglist", addSong());
	// }else if (Number(displaySelected) === child3){
	// 	console.log("cb3");
	// 	//return addAlbum(newToList);
	// 	//console.log("new Album list", addAlbum());
	// }else if (Number(displaySelected) === child4){
	// 	console.log("cb4");
	// 	//return addAlbum(newToList);
	// 	//console.log("new Album list", addAlbum());
	// }else if (Number(displaySelected) === child5){
	// 	console.log("cb5");
	// 	//return addAlbum(newToList);
	// 	//console.log("new Album list", addAlbum());
	// }else if (Number(displaySelected) === child6){
	// 	console.log("cb6");
	// 	//return addAlbum(newToList);
	// 	//console.log("new Album list", addAlbum());
	// }else if (Number(displaySelected) === child7){
	// 	console.log("cb7");
	// 	//return addAlbum(newToList);
	// 	//console.log("new Album list", addAlbum());
	// }else if (Number(displaySelected) === child8){
	// 	console.log("cb8");
	// 	//return addAlbum(newToList);
	// 	//console.log("new Album list", addAlbum());
	// }
