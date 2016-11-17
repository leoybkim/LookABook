import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// promote a Component to a container
// container is a react component that has a direct connection to a state managed by redux

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
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

function mapDispatchToProps(dispatch) {
  // result is passed to all reducers when selectBook is called
  // returns props for BookList
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
