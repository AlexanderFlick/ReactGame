import { useState } from "react";
import DrugItem from "./DrugItem";

const DrugsModule = props => {
    var [drugMoney, setDrugMoney] = useState(props.money);

    var weedTypes = [
        {name: "dirt weed", total: 0, price: 10},
        {name: "watermelon sour", total: 0, price: 100},
        {name: "blue dream", total: 0, price: 1000},
    ];

    const addMoneyHandler = (drugPrice) => {
        props.OnDrugSale(drugPrice);
    }

    return(
        <div>
        <h2>Weed Strains</h2>

        {weedTypes.map((weed) => (
            <div className="card">
            <DrugItem 
            name={weed.name} 
            total={weed.total} 
            price={weed.price}
            OnDrugSale={addMoneyHandler} />
            </div>
        ))}
        </div>
    );
}

export default DrugsModule;