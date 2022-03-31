import {useState} from "react";
import {checkBoxes, data} from "./Utils/Utils";

const Testing = (props) => {
    let tools = ["Jasmine", "Karma", "Mocha", "Jest", "Selenium", "Cypress", "Puppeteer"];
    const [checkedState, setCheckedState] = useState(
        new Array(tools.length).fill(false));
    let testing = [];
    let rows = checkBoxes(checkedState, tools, setCheckedState)
    let handleSubmit = (e) => {
        e.preventDefault();
        testing = data(checkedState, tools);
        props.onSubmit(testing);
    }
    return (
        <form onSubmit={handleSubmit}>
            {rows}
            <button type='submit'>submit</button>
        </form>
    )

}
export default Testing;