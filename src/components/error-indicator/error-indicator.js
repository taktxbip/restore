import React from "react";
import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <h2>Error</h2>
			<p>Something happened</p>
			<p className="small">(But we are reading books to know how to fix it)</p>
    </div>
  );
};

export default ErrorIndicator;
