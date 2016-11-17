import React, { Component } from 'react';
import { connect } from 'react-redux';

// promote a Component to a container
// container is a react component that has a direct connection to a state managed by redux

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
          {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // returns props for BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
