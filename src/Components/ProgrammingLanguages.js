import {useState} from "react";
import {data, checkBoxes} from "./Utils/Utils";


const ProgrammingLanguages = (props) => {
    let languages = ["Python",
        "C",
        "Java",
        "C++",
        "C#",
        "Visual Basic",
        "JavaScript",
        "Assembly language",
        "SQL",
        "Swift",
        "R",
        "PHP",
        "Classic Visual Basic",
        "Groovy",
        "Ruby",
        "Delphi/Object Pascal",
        "Fortran",
        "Perl",
        "Go",
        "MATLAB"];
    let arr = [];

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
        new Array(languages.length).fill(false));
    let rows = checkBoxes(checkedState, languages, setCheckedState)
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
        let arr = data(checkedState, languages);
        props.onSubmit(arr);
    }
    return (
        <div onChange={handleChange}>
            {rows}
        </div>
    )
}
export default ProgrammingLanguages;