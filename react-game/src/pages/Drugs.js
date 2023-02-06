import { useState } from "react";
import DrugItem from "../components/drugs/DrugItem";
import Card from "@mui/material/Card";

const Drugs = (props) => {
  var [amountPerClick, setAmountPerClick] = useState(1);

  var weedTypes = [
    { name: "dirt weed" },
    { name: "watermelon sour"},
    { name: "blue dream" },
  ];

  const addWeedHandler = () => {
    props.OnGetWeed(amountPerClick);
  };

  return (
    <div>
      {weedTypes.map((weed) => (
        <Card variant="outlined">
          <DrugItem
            name={weed.name}
            amountPerClick={amountPerClick}
            OnGetWeed={addWeedHandler}
          />
        </Card>
      ))}
    </div>
  );
};

export default Drugs;
