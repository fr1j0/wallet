import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import RouteContent from "./components/routeContent";
import Sidebar from "./components/sidebar";
import { fetchAccounts } from "./reducers/accountsReducer";
import { fetchConfig } from "./reducers/configReducer";
import { fetchCurrencies } from "./reducers/currencyReducer";
import { useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchConfig());
    dispatch(fetchCurrencies());
    dispatch(fetchAccounts());
  }, []);

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Sidebar />
        <RouteContent />
      </Router>
    </div>
  );
}

export default App;
