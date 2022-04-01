import {useState} from "react";
import {data, checkBoxes} from "./Utils/Utils";


const ProgrammingLanguages = (props) => {
    let tools = ["Python",
        "C",
        "Java",
        "C++",
        "C#",
        "JavaScript",
        "SQL",
        "Swift",
        "R",
        "PHP",
        "Ruby",
        "Delphi/Object Pascal",
        "Fortran",
        "Perl",
        "Go",
        "MATLAB"]

    /*this function is will be accessible from utils, since I'm going to basically copy
    * and paste this form since I'm too lazy to type
    * that might not be the smartert way, but I'm lazy*/
    /*    let data = (e) => {
            console.log('data')
            e.preventDefault();
            let checkedLang = []
            for(let i = 0; i < languages.length; i++) {
                if (checkedState[i]) {
                    checkedLang.push(languages[i]);
                }
            }
            arr = checkedLang;
            props.onSubmit(arr);
        }*/

    const [checkedState, setCheckedState] = useState(
        new Array(tools.length).fill(false));
    let rows = checkBoxes(checkedState, tools, setCheckedState)
    // console.log(checkedState);

/*    for (let i = 0; i < languages.length; i++) {
        rows.push(
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                       type="checkbox" id={languages[i]}
                       value={languages[i]}
                       onChange={() => {
                           checkedState[i] = !checkedState[i];
                           setCheckedState(checkedState)
                           //console.log(checkedState)
                       }}
                />
                <label className="form-check-label" htmlFor={languages[i]}>{languages[i]}</label>
            </div>
        );
    }*/

    let handleChange = () => {
        props.onSubmit(data(checkedState, tools));
    }
    return (
        <div onChange={handleChange}>
            {rows}
        </div>
    )
}
export default ProgrammingLanguages;