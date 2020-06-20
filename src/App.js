import React, { useState, useEffect } from "react";
import "./App.css";
import Chart from "./components/Chart";
import madeData from "./data";

const App = () => {
  const [chartsToDisplay, setCharts] = useState([]);

  useEffect(() => {
    async function getAPIData() {
      const charts = [];
      charts.push(<Chart key={1} data={madeData} />);
      setCharts(charts);
    }
    getAPIData();
  }, []);

  return <div>{chartsToDisplay}</div>;
};

export default App;
