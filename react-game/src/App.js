import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import DrugsModule from "./components/drugs/DrugsModule";
import ResourcesModule from "./components/resources/ResourcesModule";

function App() {
  var [money, setMoney] = useState(0);

  const addMoneyHandler = (moneyToAdd) => {
    money += moneyToAdd;
    setMoney(money);
  };

  return (
    <div className="App">
      <Header money={money} />
      <div className="row">
        <DrugsModule money={money} OnDrugSale={addMoneyHandler} />
        <ResourcesModule money={money} />
      </div>
    </div>
  );
}

export default App;
