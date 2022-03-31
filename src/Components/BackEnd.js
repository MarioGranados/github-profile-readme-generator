import {checkBoxes, data} from "./Utils/Utils";
import {useState} from "react";

const BackEnd = (props) => {
    let tools = ["node.js", "spring", "Express", "hadoop", "rabbitMQ", "graphql", "kafka", "solr", "nest"];
    let backEndArr = [];

    const [checkedState, setCheckedState] = useState(
        new Array(tools.length).fill(false));

    let rows = checkBoxes(checkedState, tools, setCheckedState);

    let handleChange = () => {
        backEndArr = data(checkedState, tools);
        props.onSubmit(backEndArr);
    }
    return (
        <div onChange={handleChange}>
            {rows}
        </div>
    )

}
export default BackEnd;