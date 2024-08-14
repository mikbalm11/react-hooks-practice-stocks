import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

/*

Hierarchy:

App
  - Header
  - MainContainer
    -SearchBar
    - StockContainer
      - Stock
    - PortfolioContainer
      - Stock

*/

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
