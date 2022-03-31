import {useState} from "react";
import {checkBoxes, data} from "./Utils/Utils";

const Database = (props) => {

    let tools = ["mongodb", "mysql", "postgresql", "redis", "oracle", "couchdb", "hive", "real", "mssql"];
    let databaseArr = [];

    const [checkedState, setCheckedState] = useState(
        new Array(tools.length).fill(false));

    let rows = checkBoxes(checkedState, tools, setCheckedState);

    let handleSubmit = (e) => {
        e.preventDefault();
        databaseArr = data(checkedState, tools);
        props.onSubmit(databaseArr);
    }
    return (
        <form onSubmit={handleSubmit}>
            {rows}
            <button type='submit'>submit</button>
        </form>
    )

}
export default Database;