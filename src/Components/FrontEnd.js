import {checkBoxes, data} from "./Utils/Utils";
import {useState} from "react";

const FrontEnd = (props) => {
    let arr = [];
    let tools = ["Web.com",
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
    let frontEndArr = [];
    let rows = checkBoxes(checkedState, tools, setCheckedState)
    let handleSubmit = (e) => {
        e.preventDefault();
        frontEndArr = data(checkedState, tools);
        props.onSubmit(frontEndArr);
    }
    return (
        <form onSubmit={handleSubmit}>
            {rows}
            <button type='submit'>submit</button>
        </form>
    )

}
export default FrontEnd;