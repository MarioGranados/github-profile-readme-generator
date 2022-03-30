const Txt = () => {
    let downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([
           `<!--I was too lazy to code the copy to clipboard function so just copy and paste this onto
your readme file-->
<!--If you are using this generator you agree to not deleting the last comment on file-->
<!--it is to give me credit for making this generator-->
<!--you can delete the lines about this-->
<h1 align="center">Hi 👋, NAME_GOES_HERE</h1>
<h3 align="center">SUBTITLE</h3>

<p align="center"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=mariogranados" alt="mariogranados" /></a> </p>

<h3 align="center">Connect with me:</h3>
<p align="center">
<a href="https://linkedin.com/in/https://www.linkedin.com/in/mario-granados-18a21b186" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/mario-granados-18a21b186" height="30" width="40" /></a>
</p>

<h3 align="center">Languages and Tools:</h3>
<div align="center">
  
  <a>
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/> </a>
  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="60" height="60"/> </a> <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="60" height="60"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
<a href="https://www.jquery.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-plain-wordmark.svg" alt="jquery" width="60" height="60"/></a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg" alt="nodejs" width="60" height="60"/> </a> </a> <a href="https://jasmine.github.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" alt="jasmine" width="60" height="60"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="60" height="60"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="60" height="60"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="60" height="60"/></a></p><br>
</div>

<p align="center">
<a href="https://github.com/MarioGranados">
  <img height="140em" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=MarioGranados&layout=compact&theme=dark&langs_count=6" />
</a>
<a href="https://github.com/MarioGranados">
  <img height="140em" align="center" src="https://github-readme-stats.vercel.app/api?username=MarioGranados&theme=dark&layout=compact&repo=convoychat&hide=stars,prs&custom_title=My GitHub Stats" />
</a>
</p><br>

<div align="center">
<img height="25em" src="https://komarev.com/ghpvc/?username=MarioGranados" />
</div>

<!--
do not delete this line
blah blah blah blah blah
do not delete the line above!
-->`
        ], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    return (
        <div>
            <button onClick={downloadTxtFile}>Download txt</button>
        </div>
    );
}
export default Txt;