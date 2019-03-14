const Axios = require("axios");


//When file is run with given argument spotify-this-song, spotify API is called on song given
//call example:node liri.js spotify-this-song Happier using process.argv[3]
// If issues persist do OMDb
// const song = process.argv[3];
// console.log(song);
//spotify API
movieThis(process.argv[2]);
function movieThis(movieName){
    if (movieName === undefined) {
        movieName = "Mr Nobody";
    }
    var urlHit =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
    Axios.get(urlHit).then(function(response){
        var jsonData = response.data;
        console.log("jsonData: " +jsonData);
        console.log("Title: " + jsonData.Title);
        console.log("Year: " + jsonData.Year);
        console.log("Rated: " + jsonData.Rated);
        console.log("IMDB Rating: " + jsonData.imdbRating);
        console.log("Country: " + jsonData.Country);
        console.log("Language: " + jsonData.Language);
        console.log("Plot: " + jsonData.Plot);
        console.log("Actors: " + jsonData.Actors);
        console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);

    })
}
