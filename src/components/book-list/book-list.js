import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { withBookstoreService } from "../hoc";
import { connect } from "react-redux";
import { booksLoaded } from "../../actions";
import {compose } from '../../utils';
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    // Receive Data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
        {books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};



export default compose(
	withBookstoreService(),
	connect(mapStateToProps, { booksLoaded })
)(BookList);