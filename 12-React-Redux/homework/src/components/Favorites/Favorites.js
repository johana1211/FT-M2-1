import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
//import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
        { /*this.state.movies && this.props.movies.map((e) => (
          <p>{e.Title}</p>
          ))
        */}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}
function dispatchStateToProps(dispatch) {
  return {
    removeMovieFavorite: (movies) => dispatch(removeMovieFavorite(movies)),

  };
}
export default connect(mapStateToProps, dispatchStateToProps)(ConnectedList);

