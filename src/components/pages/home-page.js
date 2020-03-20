import React from 'react';
import BookList from '../book-list';
import ShoppongCartTable from '../shopping-cart-table';
import './page.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="page-title">Catalog</h1>
          <BookList />
          <ShoppongCartTable />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
