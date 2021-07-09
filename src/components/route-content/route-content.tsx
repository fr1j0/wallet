import React from "react";
import { Route, Switch } from "react-router-dom";
import ExchangeRoute from "../../routes/exchange-route";
import HomeRoute from "../../routes/home-route";
import TransactionsRoute from "../../routes/transactions-route";

const RouteContent = () => {
  return (
    <div className="flex ml-14">
      <div className="w-full h-full flex items-center justify-center min-h-screen">
        <Switch>
          <Route exact path="/">
            <HomeRoute />
          </Route>
          <Route path="/exchange">
            <ExchangeRoute />
          </Route>
          <Route path="/transactions">
            <TransactionsRoute />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default RouteContent;
