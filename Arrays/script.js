// favourite movies
let favouriteMovies = ['The last Airbender', 'Rebel moon', 'Inception', 'The salt'];
    console.log(favouriteMovies [0]); // output 'The last Airbender'
    console.log(favouriteMovies [1]); // output 'Rebel moon'
    console.log(favouriteMovies [2]); // output 'Inception'
    console.log(favouriteMovies [3]); // output 'The salt'

// adding and removing elements with push
favouriteMovies = ['The last Airbender', 'Rebel moon', 'Inception'];
favouriteMovies.push ('The salt')
console.log (favouriteMovies); // output: [The last air bender, Rebel moon, Inseption, The salt]

// removing elements with pop
favouriteMovies = ['The last Airbender', 'Rebel moon', 'Inception', 'The salt'];
let removefavouriteMovie = favouriteMovies.pop ();
console.log (removefavouriteMovie); // output: The salt 
console.log (favouriteMovies); // output: [The last Airbender, Rebel moon, Inception];

// add element with unshift
favouriteMovies = ['Rebel moon', 'Inception', 'The salt'];
favouriteMovies.unshift ('The last Airbender');
console.log (favouriteMovies); // output: [The last Airbender, Rebel moon, Inception, The salt];

// remove element with shift 
favouriteMovies = ['The last Airbender', 'Rebel moon', 'Inception', 'The salt'];
favouriteMovies.shift ('The last Airbender');
console.log (favouriteMovies); // output: ['Rebel moon', 'inception', 'The salt'];

// add and remove using splice
favouriteMovies = ['The last Airbender', 'Rebel moon', 'Inception', 'The salt'];
favouriteMovies.splice (1,3);
console.log (favouriteMovies); // output: ['The last Airbender', 'Inception']


