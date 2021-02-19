import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {


componentDidMount(){
    const movieId = this.props.match.params.id; 
    this.props.getMovie(movieId)
}
    render() {
        return (
            <div className="movie-detail">
                Detalles de la Pelicula
                <h1>{this.props.movies.Title}</h1>
                <h4>{this.props.movies.Year}</h4>
                <p>{this.props.movies.Plot}</p> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail,
    };
  }
  function dispatchStateToProps(dispatch) {
    return {
      getMovie: (id) => dispatch(getMovieDetail(id)),
    };
  }
  export default connect(mapStateToProps, dispatchStateToProps)(Movie);

