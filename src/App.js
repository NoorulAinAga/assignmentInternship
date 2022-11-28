import React from "react";
import "./App.css";

import CounteriesTable from "./CounteriesTable";

function App() {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h1>React datatable</h1>
      </div>
      <CounteriesTable />
    </>
  );
}

export default App;
