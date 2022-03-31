import Header from "./Header";
import Social from "./Social";
import ProgrammingLanguages from "./ProgrammingLanguages";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Database from "./Database";
import AddOns from "./AddOns";
import Testing from "./Testing";
import {imgURL, logoDiv, names, links, Txt, socialMedia} from "./Utils/Utils";

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

    let str = '';
    let social = '';
    let handleSubmitForm = (e, str) => {
        let megaArr = formInfo.languages.concat(formInfo.database, formInfo.backEnd, formInfo.testing, formInfo.frontEnd)
        e.preventDefault()
        console.log(megaArr)

        for (let i = 0; i < names.length; i++) {
            if (megaArr[i] === names[i]) {
                str += logoDiv(40, 40, i)
            }
        }
        let greeting = formInfo.greeting.toString()
        let subtitle = formInfo.subtitle.toString()

        console.log(formInfo.social)
/*        0: "twitter.com"
        1: "hackerrank"
        2: "codewars"
        3: "twitter.com"
        4: "linkedin"
        5: "github"*/

        for(let i = 0; i < formInfo.social.length; i++) {
            if(formInfo.social[i] != null) {
                social += socialMedia(40,40, i, formInfo.social[i])
            }
        }

        let githubUserName = formInfo.social[formInfo.social.length - 1];
        console.log(githubUserName)

        Txt(githubUserName,  40, 40, 'dark', greeting, subtitle, str, social);
    }

    return (<>
        <form className="container" onSubmit={(e) => {
            handleSubmitForm(e, str)
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
{/*            <h3 className="mt-5 font-weight-bold ">Extra Stuff</h3>*/}
            <hr/>
            <AddOns/>
            <div className="justify-content-center d-flex">
                <input type={'submit'} className='my-5 btn btn-lg btn-primary' value='Download file'/>
            </div>

        </form>
        {/*the submit form will be added later that will let you chose from templates*/}
        {/*<SubmitF/>*/}
    </>);

}
export default Hero;