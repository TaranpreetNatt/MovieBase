import React, { Component } from 'react';
import Like from '../common/like';
import Table from '../common/table';

class MoviesTable extends Component {

  columns = [
    { path: 'title', label: 'Title'},
    { path: 'genre.name', label: 'Genre'},
    { path: 'numberInStock', label: 'Stock'},
    { path: 'dailyRentalRate', label: 'Rate'},
    { 
      key: 'like', 
      content: movie => (
        <Like
          like={movie.like} 
          onLike={() => this.props.onLike(movie)} 
        />
      )
    },
    {
      key: 'delete',
      content: movie => (
        <button 
          onClick={() => this.props.onDelete(movie)} 
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    },
  ];
  
  render() { 
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={this.columns}
      />
    )

  }
}
  
export default MoviesTable;