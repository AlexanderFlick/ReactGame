import ResourceItem from "../components/resources/ResourceItem";

const Resources = (props) => {
  var resources = [
    { name: "car", cost: 1000 },
    { name: "shady warehouse", cost: 10000 },
  ];

  const removeMoneyHandler = (resourceCost) => {
    props.OnResourcePurchase(resourceCost);
  };

  return (
    <div>
      {resources.map((rsrce) => (
        <div className="card">
          <ResourceItem
            name={rsrce.name}
            cost={rsrce.cost}
            onResourcePurchase={removeMoneyHandler}
          />
        </div>
      ))}
    </div>
  );
};

export default Resources;
