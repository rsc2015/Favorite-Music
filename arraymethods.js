console.log("arraymethods.js");

let artists = ["Charli", "Halsey", "Harry Hudson", "The Weeknd", "Bastille", "Justin Timberlake", "twenty one pilots", " Taylor Swift", "Hozier", "Drake"];

let songs = ["Out 0f my head", "Bad at Love", "Gone", "Secrets", "Glory", "Supplies", "Stressed Out", "Look What You Made Me Do", "Take Me To Church", "Diplomatic Immunity"];

let albums = ["Pop 2", "Hopeless fountain kingdom", "Hudson", "STARBOY", "Wild world", "Man of the Woods", "Blurryface", "Reputation", "Hozier album", "Scary Hours"];

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