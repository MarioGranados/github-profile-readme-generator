import {useState} from "react";
import {checkBoxes, data} from "./Utils/Utils";

const Testing = (props) => {
    let tools = ["Jasmine", "Karma", "Mocha", "Jest", "Selenium", "Cypress", "Puppeteer"];
    const [checkedState, setCheckedState] = useState(
        new Array(tools.length).fill(false));
    let testing = [];
    let rows = checkBoxes(checkedState, tools, setCheckedState)
    let handleChange = () => {
        testing = data(checkedState, tools);
        props.onSubmit(testing);
    }
    return (
        <div onChange={handleChange}>
            {rows}
        </div>
    )

}
export default Testing;