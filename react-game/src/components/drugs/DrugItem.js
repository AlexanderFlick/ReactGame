import { useState } from "react";
import Button from "@mui/material/Button";

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
      <Button variant="contained" onClick={GetDrug}>
        Get {props.name}
      </Button>
      <Button variant="contained" onClick={SellDrug}>
        Sell {props.name}
      </Button>
    </div>
  );
};

export default DrugItem;
