import {useState} from "react";

const ProgrammingLanguages = () => {
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
    let rows = [];

    let data = (e) => {
        e.preventDefault();
        let checkedLang = []
        for(let i = 0; i < languages.length; i++) {
            if (checkedState[i]) {
                checkedLang.push(languages[i]);
            }
        }
        console.log(checkedLang);
    }

    const [checkedState, setCheckedState] = useState(
        new Array(languages.length).fill(false));
   // console.log(checkedState);

        for (let i = 0; i < languages.length; i++) {
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
        }
        return (
            <form onSubmit={data}>
                {rows}

                <button type={"submit"}>submit</button>
            </form>
        )
}
export default ProgrammingLanguages;