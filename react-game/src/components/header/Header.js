import { AppBar, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="sticky">
      <h1>drug game</h1>
      <p>Money = ${props.money}</p>
      <p>Weed Total = {props.weedTotal}</p>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab component={Link} to="/gather" label="Gather"></Tab>
        <Tab component={Link} to="/sell" label="Sell"></Tab>
        <Tab component={Link} to="/resources" label="Resources"></Tab>
        <Tab component={Link} to="/grow" label="Grow"></Tab>
      </Tabs>
    </AppBar>
  );
};

export default Header;
