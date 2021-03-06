import {checkBoxes, data} from "./Utils/Utils";
import {useState} from "react";

const FrontEnd = (props) => {
    let arr = [];
    let tools = [
    "Angular.JS",
    "Chrome DevTools",
    "Sass",
    "Grunt",
    "CodePen",
    "TypeScript",
    "React.js",
    "NPM",
    "JQuery",
    "Bootstrap",
        "CSS",
    "Sketch"]
    const [checkedState, setCheckedState] = useState(
        new Array(tools.length).fill(false));
    let rows = checkBoxes(checkedState, tools, setCheckedState)
    let handleChange = () => {
        props.onSubmit(data(checkedState, tools));
    }
    return (
        <div onChange={handleChange}>
            {rows}
        </div>
    )

}
export default FrontEnd;