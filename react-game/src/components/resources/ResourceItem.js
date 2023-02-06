import Button from "@mui/material/Button"

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
        <Button variant="contained" onClick={BuyResource}>Buy {props.name}</Button>
      </div>
    );
  };
  
  export default ResourceItem;
  