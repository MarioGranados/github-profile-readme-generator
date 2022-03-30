import Header from "./Header";
import Social from "./Social";
import ProgrammingLanguages from "./ProgrammingLanguages";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Database from "./Database";
import AddOns from "./AddOns";
import Testing from "./Testing";
import SubmitF from "./SubmitF";

const Hero = () => {
    let formInfo = {
        greeting: '',
        subtitle: '',
    }

    let setData = (data) => {
        formInfo.greeting = data[0];
        formInfo.subtitle = data[1];
    }

    let setData2 = (data) => {
        console.log(data);
    }
    return(<>
        <div className="container">
            <h1 className='font-weight-bold text-center'>Github Readme Generator</h1>
            <p className={'text-center lead'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <hr/>
            <h3 className='font-weight-bold'>Greeting/Opener</h3>
        <Header onSubmit={setData}/>

            <h3 className="mt-5 font-weight-bold ">Programming Languages</h3>
            <hr/>
            <ProgrammingLanguages/>
            <h3 className="mt-5 font-weight-bold ">Front End</h3>
            <hr/>
            <FrontEnd/>
            <h3 className="mt-5 font-weight-bold ">Back End</h3>
            <hr/>
            <BackEnd/>
            <h3 className="mt-5 font-weight-bold ">Database</h3>
            <hr/>
            <Database/>
            <h3 className="mt-5 font-weight-bold ">Testing</h3>
            <hr/>
            <Testing/>
            <h3 className="mt-5 font-weight-bold ">Social Media</h3>
            <hr/>
            <Social onSubmit={setData2}/>
            <h3 className="mt-5 font-weight-bold ">Extra Stuff</h3>
            <hr/>
            <AddOns/>
        </div>
        <SubmitF/>
    </>);

}
export default Hero;