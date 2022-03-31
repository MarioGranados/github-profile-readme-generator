import Header from "./Header";
import Social from "./Social";
import ProgrammingLanguages from "./ProgrammingLanguages";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Database from "./Database";
import AddOns from "./AddOns";
import Testing from "./Testing";
import {checkedLang} from "./Utils/Utils";

const Hero = () => {
    let formInfo = {
        greeting: '',
        subtitle: '',
        languages: [],
        frontEnd: [],
        backEnd: [],
        database: [],
        testing: [],
        social: [],
    }
    /*there may be a simpler way to do this
    * JSON seemed like the way to go for me tho*/
    let setLanguages = (data) => {
        console.log('lang')
        formInfo.languages = data;
    }
    let setFrontEnd = (data) => {
        console.log('Front End')
        formInfo.frontEnd = data;
    }
    let setBackEnd = (data) => {
        console.log('backend')
        formInfo.backEnd = data;
    }
    let setDatabase = (data) => {
        console.log('database')
        formInfo.database = data;
    }
    let setTesting = (data) => {
        console.log('testing')
        formInfo.testing = data;
        console.log(formInfo)
    }
    let setSocial = (data) => {
        formInfo.social = data;
    }
    let setData = (data) => {
        formInfo.greeting = data[0];
        formInfo.subtitle = data[1];
        console.log("greeting : " + formInfo.greeting);
        console.log("subtitle: " + formInfo.subtitle);
    }

    return (<>
        <form className="container" onSubmit={(e) => {
            e.preventDefault();
            console.log(formInfo)
        }
        }>
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
            <FrontEnd onSubmit={setFrontEnd}/>
            <h3 className="mt-5 font-weight-bold ">Back End</h3>
            <hr/>
            <BackEnd onSubmit={setBackEnd}/>
            <h3 className="mt-5 font-weight-bold ">Database</h3>
            <hr/>
            <Database onSubmit={setDatabase}/>
            <h3 className="mt-5 font-weight-bold ">Testing</h3>
            <hr/>
            <Testing onSubmit={setTesting}/>
            <h3 className="mt-5 font-weight-bold ">Social Media</h3>
            <hr/>
            <Social onSubmit={setSocial}/>
            <h3 className="mt-5 font-weight-bold ">Extra Stuff</h3>
            <hr/>
            <AddOns/>
            <input type={'submit'} className='btn btn-lg btn-primary'/>
        </form>
        {/*the submit form will be added later that will let you chose from templates*/}
        {/*<SubmitF/>*/}
    </>);

}
export default Hero;