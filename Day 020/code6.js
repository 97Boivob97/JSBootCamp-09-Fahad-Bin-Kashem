/* Suppose you are given a funciton whiche receive a object , 
you have to find the key with value type of string and concat, 
return the information in speicifed format
Ex: key-value */

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};
function showProperties(movieData) {
  return "title-" + movieData.title + " " + "director-" + movieData.director;
}
console.log(showProperties(movie)); //title-a director-b
