import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-list-item-image">
        <img alt="Book Cover" src={coverImage}></img>
      </div>
      <div className="book-list-item-descr">
        <h4>{title}</h4>
        <span className="author">{author}</span>
        <span className="price">${price}</span>
        <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
