import Button from "@mui/material/Button";

const DrugItem = (props) => {
  
  const GetWeed = () => {
    props.OnGetWeed(props.amountPerClick);
  };

  return (
    <div>
      <p>
        {props.amountPerClick} {props.name} per Click
      </p>
      <Button variant="contained" onClick={GetWeed}>
        Get {props.name}
      </Button>
    </div>
  );
};

export default DrugItem;
