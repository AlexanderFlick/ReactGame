import { useState } from "react";
import DrugItem from "../components/drugs/DrugItem";
import Card from "@mui/material/Card";

const Drugs = (props) => {
  var [drugMoney, setDrugMoney] = useState(props.money);

  var weedTypes = [
    { name: "dirt weed", total: 0, price: 10 },
    { name: "watermelon sour", total: 0, price: 100 },
    { name: "blue dream", total: 0, price: 1000 },
  ];

  const addMoneyHandler = (drugPrice) => {
    props.OnDrugSale(drugPrice);
  };

  return (
    <div>
      {weedTypes.map((weed) => (
        <Card variant="outlined">
          <DrugItem
            name={weed.name}
            total={weed.total}
            price={weed.price}
            OnDrugSale={addMoneyHandler}
          />
        </Card>
      ))}
    </div>
  );
};

export default Drugs;
