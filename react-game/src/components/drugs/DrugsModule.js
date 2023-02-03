import { useState } from "react";
import DrugItem from "./DrugItem";

const DrugsModule = props => {
    var [drugMoney, setDrugMoney] = useState(props.money);

    var weedTypes = [
        {name: "dirt weed", total: 0, price: 10},
        {name: "good", total: 0, price: 100},
        {name: "great", total: 0, price: 1000},
    ];

    const addMoneyHandler = (drugPrice) => {
        drugMoney += drugPrice;
        setDrugMoney(drugMoney);
        props.OnDrugSale(drugMoney);
    }

    return(
        <div>
        {weedTypes.map((weed) => (
            <DrugItem 
            name={weed.name} 
            total={weed.total} 
            price={weed.price}
            OnDrugSale={addMoneyHandler} />
        ))}
        </div>
    );
}

export default DrugsModule;