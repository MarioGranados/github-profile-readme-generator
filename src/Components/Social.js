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
        props.onSubmit(input.concat(input2));
    }

    let handleCol1 = (e, index) => {
        input2[index] = e.target.value
        setInput2(input2)
        console.log(input2)
    }

    let handleCol2 = (e, index) => {
        input[index] = e.target.value
        setInput(input)
        console.log(input)
    }

    for (let i = 0; i < col1.length; i++) {
        rows.push(
            <div className="row">
                <div className="col">
                    <label htmlFor={col1[i]}>{col1[i]}</label>
                    <input type="text"
                           className="form-control"
                           placeholder={'https://www.' + col1[i] + '.com'}
                           onChange={
                               (e) => {handleCol1(e, i)}
                           }

                    />
                </div>
                <div className="col">
                    <label htmlFor={col2[i]}>{col2[i]}</label>
                    <input type="text"
                           className="form-control"
                           placeholder={'https://www.' + col2[i] + '.com'}
                           onChange={
                               (e) => {handleCol2(e, i)}
                           }
                    />
                </div>
            </div>
        );
    }
    return (
        <div onChange={handleChange}>
            {rows}
        </div>
    )

}
export default Social;