const BackEnd = () => {
    let col1 = ["node.js", "spring", "Express", "hadoop", "rabbitMQ", "graphql", "kafka", "solr", "nest"];
    let rows = [];
    for (let i = 1; i < col1.length; i++) {
        rows.push(
            <>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id={col1[i]} value={col1[i]}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">{col1[i]}</label>
                </div>
            </>
        );
    }
    return (
        <>
            {rows}
        </>
    )

}
export default BackEnd;