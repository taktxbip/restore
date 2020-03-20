import React from "react";
import { connect } from "react-redux";

import "./error-indicator.css";

const ErrorIndicator = ({ error }) => {
  console.log(error);

  return (
    <div className="error-indicator">
      <h2>Error</h2>
      <p>Something happened</p>
      <p className="small">(But we are reading books to know how to fix it)</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { error: state.error };
};

export default connect(mapStateToProps)(ErrorIndicator);
