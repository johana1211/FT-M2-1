
export function addMovieFavorite(payload) {
    return { 
      type: "ADD_MOVIE_FAVORITE", 
      payload 
    };
  }
export function removeMovieFavorite(payload){
    return {
        type: "REMOVE_MOVIE_FAVORITE", 
        payload, 
    }
}

  
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch( "https://movies-tvshows-data-imdb.p.rapidapi.com/" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ 
            type:"GET_MOVIES", 
            payload: json });
        });
    }; 
  }

  export function getMovieDetail(id){
    return  function(dispatch){
        fetch ("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
        .then(response => response.json())
        .then(json => {
          dispatch({ 
            type: "GET_MOVIES_DETAIL",
            payload: json})
        })         
    }
}
