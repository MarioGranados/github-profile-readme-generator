const Testing = () => {
    let col1 = ["Jasmine", "Karma", "Mocha", "Jest", "Selenium", "Cypress", "Puppeteer"];
    let rows = [];
    for (let i = 1; i < col1.length; i++) {
        rows.push(
            <>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id={col1[i]} value={col1[i]}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">{col1[i]}</label>
                </div>
            </>
        );
    }
    return (
        <>
            {rows}
        </>
    )

}
export default Testing;