import './App.css';
import { useState } from "react";
import Header from './components/header/Header';
import DrugsModule from './components/drugs/DrugsModule';

function App() {
  var [money, setMoney] = useState(0);

  const addMoneyHandler = moneyToAdd => {
    money += moneyToAdd;
    setMoney(money);
  }

  return (
    <div className="App">

    <Header money={money}/>
    <DrugsModule money={money} OnDrugSale={addMoneyHandler}/>
    </div>
  );
}

export default App;
