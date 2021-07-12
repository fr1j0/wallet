import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import RouteContent from "./components/routeContent";
import Sidebar from "./components/sidebar";
import { set as setCurrencies } from "./reducers/currencyReducer";
import { useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCurrencies = async () => {
      const res = await fetch("http://localhost:4000/currency");
      const fetchedCurrencies = await res.json();

      dispatch(setCurrencies(fetchedCurrencies));
    };
    fetchCurrencies();
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
