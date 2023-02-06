import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Header  from "./components/header/Header";
import  Drugs  from "./pages/Drugs";
import  Resources  from "./pages/Resources";
import "./App.css";

function App() {
  var [money, setMoney] = useState(0);
  var [weedTotal, setWeedTotal] = useState(0);

  const getMoreWeed = (amountPerClick) => {
    weedTotal += amountPerClick;
    setWeedTotal(weedTotal);
  }

  const removeMoneyHandler = (priceOfResource) => {
    if (money >= priceOfResource) {
      money -= priceOfResource;
      setMoney(money);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header money={money} weedTotal={weedTotal}/>
        <Routes>
          <Route
            exact
            path="/resources"
            element={
              <Resources
                money={money}
                OnResourcePurchase={removeMoneyHandler}
              />
            }
          />
          <Route
            exact
            path="/gather"
            element={
            <Drugs OnGetWeed={getMoreWeed} />}
          />
          <Route exact
            path="/resources"
            element="/grow"></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
