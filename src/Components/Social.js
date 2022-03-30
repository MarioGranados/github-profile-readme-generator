import {useState} from "react";

const Social = (props) => {
    /*simple solution for a bigger problem. Col1 & col2 must be the same lengh for the render to work*/
    let col1 = ["Twitter", "LinkedIn", "Github"];
    let col2 = ["Instagram", "HackerRank", "CodeWars"];
    let rows = [];

    const [input, setInput] = useState([]);
    let flag = false

    let handleSubmit = (e) => {
        if (flag) {
            setInput(arr => [...arr, e.target.value]);
            console.log(input)
        }
    }

    let formSubmit = (e) => {
        flag = true
        e.preventDefault();
        props.onSubmit(input);
    }

    for (let i = 1; i < col1.length; i++) {
        rows.push(
            <div className="row">
                <div className="col">
                    <label htmlFor={col1[i]}>{col1[i]}</label>
                    <input type="text"
                           className="form-control"
                           placeholder={col1[i]}
                           onChange={
                               handleSubmit
                           }
                    />
                </div>
                <div className="col">
                    <label htmlFor={col2[i]}>{col2[i]}</label>
                    <input type="text"
                           className="form-control"
                           placeholder={col2[i]}
                           onChange={
                               handleSubmit
                           }
                    />
                </div>
            </div>
        );
    }
    return (
        <form onSubmit={formSubmit}>
            {rows}
            <button type='submit'>submit</button>
        </form>
    )

}
export default Social;