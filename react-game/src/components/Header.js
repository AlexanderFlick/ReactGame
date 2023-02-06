import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
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
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab component={Link} to="/drugs" label="Drugs"></Tab>
        <Tab component={Link} to="/resources" label="Resources"></Tab>
      </Tabs>
    </AppBar>
  );
};

export default Header;
