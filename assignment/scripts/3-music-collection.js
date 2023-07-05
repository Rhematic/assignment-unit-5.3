console.log("***** Music Collection *****");

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  Object.create(album);
  collection.push(album);
  return album;
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

addToCollection("U Remind Me", "Usher", "2001");
addToCollection("U Got It Bad", "Usher", "2001");
addToCollection("U Don't Have to Call", "Usher", "2001");
addToCollection("Jolene", "Dolly Parton", "1974");
addToCollection("Desperados", "The Firm", "1997");
addToCollection("Green Onions", "Booker T. & The M.G.'s", "1962");

console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection,
// like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like:
// `TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
  console.log(array.length);
  for (const property of array) {
    console.log(`${property.title} by ${property.artist}, 
    published in ${property.yearPublished}`);
  }
}

// - Test the `showCollection` function.

showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching
// artist to the array.
//   - Return the array with the matching results. If no results are found,
// return an empty array.

function findByArtist(artist) {
  let artistArray = [];
  for (const song of collection) {
    if (song.artist === artist) {
      artistArray.push(song);
    }
  }
  return artistArray;
}

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

console.log(findByArtist("Dolly Parton"));
console.log(findByArtist("Usher"));

// > When testing your functions, write all tests in the JavaScript file!
