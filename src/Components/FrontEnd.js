const FrontEnd = () => {
    let col1 = ["Web.com",
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
export default FrontEnd;