const ResourceItem = props => {

  const BuyResource = () => {
    props.onResourcePurchase(props.cost);
  }

  return (
    <div>
      <p>{props.name}</p>
      <p>
        Cost of {props.name}: ${props.cost}
      </p>
      <button className="drugButton" onClick={BuyResource}>Buy {props.name}</button>
    </div>
  );
};

export default ResourceItem;
