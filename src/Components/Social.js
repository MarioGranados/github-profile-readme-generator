import {useState} from "react";

const Social = (props) => {
    /*simple solution for a bigger problem. Col1 & col2 must be the same lengh for the render to work*/
    let col1 = ["Twitter", "LinkedIn", "Github"];
    let col2 = ["Instagram", "HackerRank", "CodeWars"];
    let rows = [];

    const [input, setInput] = useState(
        new Array(col1.length).fill(null)
    );
    const [input2, setInput2] = useState(
        new Array(col2.length).fill(null)
    )

    let handleChange = () => {
        props.onSubmit(input2.concat(input));
    }

    let handleCol1 = (e, index) => {
        input[index] = e.target.value
        setInput(input)
    }

    let handleCol2 = (event, index) => {
        input2[index] = event.target.value
        setInput2(input2)
    }

    for (let i = 0; i < col1.length; i++) {
        rows.push(
            <div className="row">
                <div className="col">
                    <label htmlFor={col1[i]}>{col1[i]}</label>
                    <input type="text"
                           className="form-control"
                           placeholder={col1[i] + ' Username'}
                           onChange={
                               (e) => {handleCol1(e, i)}
                           }

                    />
                </div>
                <div className="col">
                    <label htmlFor={col2[i]}>{col2[i]}</label>
                    <input type="text"
                           className="form-control"
                           placeholder={col2[i] + ' Username'}
                           onChange={
                               (event) => {handleCol2(event, i)}
                           }

                    />
                </div>
            </div>
        );
    }
    return (
        <div onChange={handleChange}>
            <h4 className={'text-center'}>I was too lazy for validation, just type your username</h4>
            {rows}
        </div>
    )

}
export default Social;