import { useState } from "react";

const DrugItem = (props) => {
  var [drugTotal, setDrugTotal] = useState(props.total);
  var [priceOfDrug, setPriceOfDrug] = useState(props.price);

  const GetDrug = () => {
    drugTotal++;
    setDrugTotal(drugTotal);
  };

  const SellDrug = () => {
    if (drugTotal > 0) {
      drugTotal--;
      setDrugTotal(drugTotal);
      props.OnDrugSale(props.price);
    }
  };

  return (
    <div>
      <p>{props.name}</p>
      <p>Total: {drugTotal}</p>
      <p>
        Price per {props.name} Sold: ${props.price}
      </p>
      <button onClick={GetDrug}>Get {props.name}</button>
      <button onClick={SellDrug}>
        Sell {props.name} for ${props.price}
      </button>
    </div>
  );
};

export default DrugItem;
