
export const data = (checkedState, languages) => {
    let checkedLang = []
    for (let i = 0; i < languages.length; i++) {
        if (checkedState[i]) {
            checkedLang.push(languages[i]);
        }
    }
    return checkedLang
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
            </div>
        </>)
    }
    return rows;
}

export let logoDiv = (width, height, index) => {
    return `<a href="${links[index]}" target="_blank" rel="noreferrer">
        <img src="${imgURL[index]}"
             alt="${names[index]}" width="${width}" height="${height}"/> </a>`
}

export let socialMedia = (width, height, index, userName) => {
    return `<a href="https://${social[index]}.com/${userName[index]}" target="_blank" rel="noreferrer">
        <img src="${socialLogos[index]}"
             alt="${social[index]}" width="${width}" height="${height}"/> </a>`
}

let social = ["Twitter", "HackerRank", "CodeWars", "Instagram", "LinkedIn", "Github"];
let socialLogos = ["https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png",
    "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
    "https://docs.codewars.com/logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png",
    "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"]


export const names = [
    /*programming languages*/
    "Python",
    "C",
    "Java",
    "C++",
    "C#",
    "JavaScript",
    "SQL",
    "Swift",
    "R",
    "PHP",
    "Ruby",
    "Delphi/Object Pascal",
    "Fortran",
    "Perl",
    "Go",
    "MATLAB",
    /*end of programming languages*/
    "mongodb",
    "mysql",
    "postgresql",
    "redis",
    "oracle",
    "couchdb",
    "hive",
    "real",
    "mssql",
    /*end of database tools*/
    "node.js",
    "spring",
    "Express",
    "hadoop",
    "rabbitMQ",
    "graphql",
    "kafka",
    "solr",
    "nest",
    /*end of backend languages*/
    "Jasmine",
    "Karma",
    "Mocha",
    "Jest",
    "Selenium",
    "Cypress",
    "Puppeteer",
    /*end of Testing */
    "Angular.JS",
    "Sass",
    "Grunt",
    "CodePen",
    "TypeScript",
    "React.js",
    "NPM",
    "JQuery",
    "Bootstrap",
    "CSS",
    "Sketch",
    /*end of front end*/
];

export const imgURL = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/220px-Python-logo-notext.svg.png?20100317150552",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    "https://spng.pngfind.com/pngs/s/74-744402_java-logo-png-transparent-svg-vector-freebie-supply.png",
    "https://i.pinimg.com/736x/a2/dc/32/a2dc3249364449a49f01a6275d277b8c.jpg",
    "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png",
    "https://www.svgrepo.com/show/117653/sql-file-format.svg",
    "https://cdn.worldvectorlogo.com/logos/swift-15.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Embarcadero_Delphi_10.4_Sydney_Product_Logo_and_Icon.svg/1200px-Embarcadero_Delphi_10.4_Sydney_Product_Logo_and_Icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Fortran_logo.svg/2048px-Fortran_logo.svg.png",
    "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/perl-programming-language.png",
    "https://www.pikpng.com/pngl/m/6-65374_logo-png-transparent-svg-go-programming-logo-clipart.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/267px-Matlab_Logo.png",
    "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
    "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png",
    "https://cdn.worldvectorlogo.com/logos/redis.svg",
    "http://cdn.onlinewebfonts.com/svg/img_248288.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Apache_CouchDB_logo.svg/2027px-Apache_CouchDB_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Apache_Hive_logo.svg",
    "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/800px-Spring_Framework_Logo_2018.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    "https://seeklogo.com/images/H/hadoop-logo-D36814CB84-seeklogo.com.png",
    "https://www.svgrepo.com/show/303576/rabbitmq-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apache_kafka.svg/1261px-Apache_kafka.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Apache_Solr_logo.svg/1200px-Apache_Solr_logo.svg.png",
    "https://camo.githubusercontent.com/5f54c0817521724a2deae8dedf0c280a589fd0aa9bffd7f19fa6254bb52e996a/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667",
    "https://upload.wikimedia.org/wikipedia/en/2/22/Logo_jasmine.svg",
    "https://seeklogo.com/images/K/karma-logo-B204C2D2E3-seeklogo.com.png",
    "https://seeklogo.com/images/M/mocha-logo-66DA231220-seeklogo.com.png",
    "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
    "https://camo.githubusercontent.com/74ed64243ba05754329bc527cd4240ebd1c087a1/68747470733a2f2f73656c656e69756d2e6465762f696d616765732f73656c656e69756d5f6c6f676f5f7371756172655f677265656e2e706e67",
    "https://avatars.githubusercontent.com/u/8908513?s=280&v=4",
    "https://developers.google.com/web/tools/images/puppeteer.png",
    "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
    "https://camo.githubusercontent.com/c38bf4a44750bd9b576a2259a5074dd277d63f0a412b5b1f31f54e516711ef5b/687474703a2f2f736173732d6c616e672e636f6d2f6173736574732f696d672f7374796c6567756964652f7365616c2d636f6c6f722d61656630333534632e706e67",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Grunt.svg/1200px-Grunt.svg.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/codepen.png",
    "https://cdn.worldvectorlogo.com/logos/typescript-2.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png",
    "https://cdn.iconscout.com/icon/free/png-256/jquery-8-1175153.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/850px-Sketch_Logo.svg.png",
];

export const links = [
    "Python",
    "C",
    "Java",
    "C++",
    "C#",
    "JavaScript",
    "SQL",
    "Swift",
    "R",
    "PHP",
    "Ruby",
    "Delphi/Object Pascal",
    "Fortran",
    "Perl",
    "Go",
    "MATLAB",
    "mongodb",
    "mysql",
    "postgresql",
    "redis",
    "oracle",
    "couchdb",
    "hive",
    "real",
    "mssql",
    "node.js",
    "spring",
    "Express",
    "hadoop",
    "rabbitMQ",
    "graphql",
    "kafka",
    "solr",
    "nest",
    "Jasmine",
    "Karma",
    "Mocha",
    "Jest",
    "Selenium",
    "Cypress",
    "Puppeteer",
    "Web.com",
    "Angular.JS",
    "Sass",
    "Grunt",
    "CodePen",
    "TypeScript",
    "React.js",
    "NPM",
    "JQuery",
    "Bootstrap",
    "CSS",
    "Sketch",
];



/*downldad button thingy mgisdfjkdsljflksfd*/

export const Txt = (githubUserName, height, width, theme, greeting, subtitle, logos, social) => {

    const element = document.createElement("a");
    const file = new Blob([
        `<!--I was too lazy to code the copy to clipboard function so just copy and paste this onto
your readme file-->
<!--If you are using this generator you agree to not deleting the last comment on file-->
<!--it is to give me credit for making this generator-->
<!--you can delete the lines about this-->

<!--section greeting-->
<h1 align="center">${greeting}</h1>
<h3 align="center">${subtitle}</h3>
<!--section greeting ends-->

<!--trophies-->
<p align="center"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${githubUserName}" alt="${githubUserName}" /></a> </p>
<!--trophies end-->

<!--social media bgins-->
${social}
<!--socialMediaEnds-->

<!--section-->

<h3 align="center">Languages & Tools:</h3>
<div align="center">
<!--here are the imports-->
${logos}
<!--here are imports-->
<!--end section-->


<!--you get the idea-->

<p align="center">
<a href="https://github.com/${githubUserName}">
  <img height="140em" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUserName}&layout=compact&theme=${theme}&langs_count=10" />
</a>
<a href="https://github.com/${githubUserName}">
  <img height="140em" align="center" src="https://github-readme-stats.vercel.app/api?username=${githubUserName}&theme=${theme}&layout=compact&repo=convoychat&hide=stars,prs&custom_title=My GitHub Stats" />
</a>
</p><br>

<div align="center">
<img height="25em" src="https://komarev.com/ghpvc/?username=${githubUserName}" />
</div>
<!--ends here-->

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
