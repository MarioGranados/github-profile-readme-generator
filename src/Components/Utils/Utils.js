export const data = (checkedState, languages) => {
    let checkedLang = []
    for(let i = 0; i < languages.length; i++) {
        if (checkedState[i]) {
            checkedLang.push(languages[i]);
        }
    }
    return checkedLang;
}

export const checkBoxes = (checkedState, tools, setCheckedState) => {
    let rows = [];
    for (let i = 1; i < tools.length; i++) {
    rows.push(<>
    <div className="form-check form-check-inline">
        <input className="form-check-input"
               type="checkbox"
               id={tools[i]}
               value={tools[i]}
               onChange={() => {
                   checkedState[i] = !checkedState[i];
                   setCheckedState(checkedState)
                   //console.log(checkedState)
               }}
        />
        <label className="form-check-label" htmlFor="inlineCheckbox1">{tools[i]}</label>
    </div></>)
    }
    return rows;
}
