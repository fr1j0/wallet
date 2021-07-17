import React from "react";
import { Route, Switch } from "react-router-dom";
import DepositRoute from "../../routes/deposit-route";
import ExchangeRoute from "../../routes/exchange-route";
import HomeRoute from "../../routes/home-route";
import TransactionsRoute from "../../routes/transactions-route";

const RouteContent = () => {
  return (
    <div className="relative flex m-0 md:ml-16 z-0">
      <div className="absolute w-full h-full bg-gradient-to-br from-blue-900 via-pink-300 to-purple-900 opacity-50"></div>
      <div className="w-full h-full flex items-center justify-center min-h-screen">
        <Switch>
          <Route exact path="/">
            <HomeRoute />
          </Route>
          <Route path="/deposit">
            <DepositRoute />
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
