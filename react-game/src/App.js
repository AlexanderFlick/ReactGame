import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drugs from "./pages/Drugs";
import Resources from "./pages/Resources";
import "./App.css";
import { ReactDOM } from "react";

function App() {
  var [money, setMoney] = useState(0);

  const addMoneyHandler = (moneyToAdd) => {
    money += moneyToAdd;
    setMoney(money);
  };

  const removeMoneyHandler = (priceOfResource) => {
    if (money >= priceOfResource) {
      money -= priceOfResource;
      setMoney(money);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header money={money} />
        <Routes>
          <Route exact path="/resources" element={<Resources money={money} OnResourcePurchase={removeMoneyHandler} />} />
          <Route exact path="/drugs" element={<Drugs OnDrugSale={addMoneyHandler}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
