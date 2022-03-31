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
        languages: [],
        social: [],

    }

    let setData = (data) => {
        formInfo.greeting = data[0];
        formInfo.subtitle = data[1];
        console.log("greeting : " + formInfo.greeting);
        console.log("subtitle: " + formInfo.subtitle);
    }

    let setSocial = (data) => {
        formInfo.social = data;
    }

    let setLanguages = (data) => {
        console.log("Lang Data")
        formInfo.languages = data;
        //console.log(formInfo.languages)
        console.log(formInfo)
    }


    return (<>
        <div className="container">
            <h1 className='font-weight-bold text-center'>Github Profile Readme Generator</h1>
            <p className={'text-center lead'}>
                I made this generator for my class, feel free to use it.
                Probably has a bunch of problems, but don't we all?
            </p>
            <hr/>
            <h3 className='font-weight-bold'>Greeting/Opener</h3>
            <Header onSubmit={setData}/>

            <h3 className="mt-5 font-weight-bold ">Programming Languages</h3>
            <hr/>
            <ProgrammingLanguages onSubmit={setLanguages}/>
            <h3 className="mt-5 font-weight-bold ">Front End</h3>
            <hr/>
            <FrontEnd onSubmit={setLanguages}/>
            <h3 className="mt-5 font-weight-bold ">Back End</h3>
            <hr/>
            <BackEnd onSubmit={setLanguages}/>
            <h3 className="mt-5 font-weight-bold ">Database</h3>
            <hr/>
            <Database onSubmit={setLanguages}/>
            <h3 className="mt-5 font-weight-bold ">Testing</h3>
            <hr/>
            <Testing onSubmit={setLanguages}/>
            <h3 className="mt-5 font-weight-bold ">Social Media</h3>
            <hr/>
            <Social onSubmit={setSocial}/>
            <h3 className="mt-5 font-weight-bold ">Extra Stuff</h3>
            <hr/>
            <AddOns/>
        </div>
        <SubmitF/>
    </>);

}
export default Hero;