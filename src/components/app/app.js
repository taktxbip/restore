import React from "react";
import Header from "../header";
import { HomePage, CartPage } from "../pages";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="restore">
      <Header numItems={4} total={212}/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route
          render={() => {
            return (
              <div>
                <h2>404 error</h2>
                <p>We can't find that page in our library</p>
              </div>
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
