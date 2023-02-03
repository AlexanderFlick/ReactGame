const ResourceItem = props => {
    return(
        <div>
        <p>{props.name}</p>
        <p>Cost of {props.name}: ${props.cost}</p>
        <button className="drugButton">Buy {props.name}</button>
        </div>
    );
}

export default ResourceItem;