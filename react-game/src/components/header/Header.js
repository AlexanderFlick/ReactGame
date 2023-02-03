const Header = props => {
    return(
        <div className="header">
      <h1>drugs</h1>
      <p>Money: ${props.money}</p>
    </div>
    );
}

export default Header;