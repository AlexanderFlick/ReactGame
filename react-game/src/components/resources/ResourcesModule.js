import ResourceItem from "./ResourceItem";

const ResourcesModule = props => {
    var resources = [
        {name: "car", cost: 1000},
        {name: "shady warehouse", cost: 10000}
    ]

    return(
        <div>
        <h2>Resources</h2>

        {resources.map((rsrce) => (
            <div className="card">
            <ResourceItem name={rsrce.name} cost={rsrce.cost} />
            </div>
        ))}
        </div>
    );
}

export default ResourcesModule;