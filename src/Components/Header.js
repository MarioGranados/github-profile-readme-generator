import {useState} from "react";

const Header = (props) => {

    const [greeting, setGreeting] = useState("Hello my name is Mario");
    const [subtitle, setSubtitle] = useState("I like to solve all my problems with code!");

    /*props to parent component*/
    let handleSubmit = (e) => {
        e.preventDefault()
        let arr = [greeting, subtitle]

        props.onSubmit(arr);
    }

    return (
        <div onChange={handleSubmit}>
            <div className="form-group">
                <label htmlFor="greeting">Greeting</label>
                <input type="text" className="form-control" id="greeting"
                       placeholder={greeting}
                       onChange={e => {
                           setGreeting(e.target.value)
                       }}
                       value={greeting}
                />
            </div>
            <div className="form-group">
                <label htmlFor="subtitle">Subtitle</label>
                <input type="text" className="form-control" id="subtitle"
                       placeholder={subtitle}
                       onChange={e => {
                           setSubtitle(e.target.value)
                       }}
                />
            </div>
        </div>
    );
}
export default Header;