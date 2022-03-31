export const data = (checkedState, languages) => {
    let checkedLang = []
    for(let i = 0; i < languages.length; i++) {
        if (checkedState[i]) {
            checkedLang.push(languages[i]);
        }
    }
    return checkedLang;
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
    </div></>)
    }
    return rows;
}

export let logoDiv = (imgURL, URL, logoName, width, height) => {
    return `<a href="${URL}" target="_blank" rel="noreferrer">
        <img src="${imgURL}"
             alt="${logoName}" width="${width}" height="${height}"/> </a>`
}

export let validation = (arr, logoDiv) => {
    let megaArr = []
    for(let i = 0; i < arr.length; i++) {
        megaArr.push(logoDiv())
    }
    return megaArr
}

export let logoNameArr  = [
    "Python",
    "C",
    "Java",
    "C++",
    "C#",
    "Visual Basic",
    "JavaScript",
    "Assembly language",
    "SQL",
    "Swift",
    "R",
    "PHP",
    "Classic Visual Basic",
    "Groovy",
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
    "Sketch",
];

export let imgURL  = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/220px-Python-logo-notext.svg.png?20100317150552",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    "https://spng.pngfind.com/pngs/s/74-744402_java-logo-png-transparent-svg-vector-freebie-supply.png",
    "https://i.pinimg.com/736x/a2/dc/32/a2dc3249364449a49f01a6275d277b8c.jpg",
    "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA1VBMVEX///8jPJjl5eU6VqYoMYDk5OTj4+Py8vL6+vrr6+sKLpMsTKKqr8+vt9XNzc07V6ccJ3wxUKOAhK+Il8YAJZEWNJUAKZJKYqvEy+EjPZkdOJZ7hrqNkLPT09MiR6ESMpXCwsLs7vbZ2dkAII9hcLAiLH6YocnW2uoWInq+vb0OHXkmO5Pg4++gqM1JW6a8wtwzSJcAF3iDjr9yf7gAAHJbcbMoN4pyeKgAD3YAGo7N0uWYm7xgZZy+wNU9RIorOIZQWJZscaM7Q4xWXJadqM9nerett9eO72a5AAARkElEQVR4nO2da2OaShOAKSqiGAyNl0gqgokxsSY5SdqenLRpe3ra/v+f9LL3XViWiy7Gt86XRFx1HnaZnZ0ZFsOkYtkGlXaLHG112FHD2sPGxoHwNSp9IDwQvn6lD4QHwtev9IFQJLSY8K3Z0c6eNzZsJh0mbfnhfWzMw3ZaRKw2dwosdngPG7dEQjqQhdZs1O9hY/NA+BqVPhAeCF+/0gfCP5rQKjPV7knjltH+fxeDwYpeLD0quLx72PgPWD0dCIt8NfsOvnGLHd688e4IbctqzV0q0xZdhbbYUZetTcs3nnZ2Smi7uk2hPXc7OyS0XUO/zN0dEtYBaBjT+c4IoUu07OmUI/CzYWcTwrwZv6WYakNwLBh1NcqHZ/CzU1OlhlpnQx7CaudGtuJXU/D1l903GuX94ivqRIUaOToLsMxOC14sE7ExuAqjoU7ASbO56sHuUahRXOeSyxYTjtHHmU7CT81m8x70gruL9eEcvFqe6wR8HwM2r94CJaZG/YSwC8e+RsAJ6MK4E9fxD82ZpayLcArs1d1IIyDqwmbz+Av4vdCUqqGREJgZWycfMDNI7l/i3zKnNRPCmeJE60zxiRAuFmIn1kIYX/nxTKHVzNAujGeMz/GvtcO0GhoJoUN6oXMunHxqcogRGDZWjYQd8N/zQCMgMTPY2PwNfvW6szFhYf8AdmGjhpmCduIy/kFr3qri05TKGKMjpgu+rFfHTEGNzVd6Yo2yWW7WnYVXT9AhtbUCTpoJuT8iF4dRw/owBA0ftDukYic2bdaJugnn8/i/dV0zBRHknrq1EIbgv3FtMwU1NtA9tWsgnAL7W4tDmhinyD2tgRD+hu51r0yeToG6He2EYQ2hCzkhmzG0EqLQhVbAjC4kAY25XsLONfijNXQhNTNIjoF76tpaK/dg6OK5fjODCUlAo5RPU64KLgQfqdMhFeUDnDEsfZV7Jjw5v3fVhbGx+Q40ui6jc7nKPRM6pBOdgJlmBgkMaHRaZXQuQ4jMTE2hi4xO/AZUcIvrXI4QOaRax+gbNWDsnsKAxlwPIYqQ1he6kMsTDGjYBXUuRwgd0lP9QW61oICGW1DnUoSoCx2tM0U+YNyJMN/WKaRzOcIQHLvZ3UxBBM0YbiGdSxFCh7S9izVFUlZ8QGN7lXs15NIKmBk8TrmAxvYq91r6QxeFxiiQq3dGiTqXopV78JTVH7qQC8y3TefmNiv34NL6rr4gt1pQvu06R+dyhNAhDXY+U9BOJPm2rRHOwVW8k9BFhkD3NNweIcql/aMTsFQXknybuzVCaGZ+vRIzgwQFNKzWdgihK798LWYGE6J8m7kdQtiF3s5CF3K5R/m2rRDC2aXWXFoRwQGNrVTuwZliNxFSZSfCgIYl15knzK2C20UurVAnfoPu6eaVe7b+0EWlLiTuaWgWzMxDQtlKpOaqi1KIQoVG1fUhHOhbckj94XA2Gw6TRrmCmUGCy8E6mxHCLpzIZgp/xiSfbtgdTRoXj2dnjxeNyajLjQk8RhfHVBZpFib8YRjQaE03IoQO6Y3MkPrjEyqXOYPY755f/F7Taz5a9y7Ou+SsoS5cfH9H5b8k4vFb9ib/Hikg3oQwO5c2WHKfPFMidoMbwaJBHY5uBz7XhTDpguX5PkG44D4odCLKt7kbEMIxKg9dzPhPnipsrd/9meJDH2p0mZnhCe1kF77j3hMImwvknlYmRA6pVPvZg9Aj2YAzby3lA9IbDYmZ4QmNf0WM++dMQlShEVYmVBR3jZ75TxqPWcO0+yuTL5bo9kpG+LISML5xYyBBiPNt84qE0CE9kg/AQBx5WbUZswsVYCxvrySEkUCIlhEZhAs6Y1Sp3MueKd4Mz0RFbfmE4Xs5gPGIXKQJjS+8xVy9KAib96BCozM1K1TumdeKMuDRaUJR+fp4lH0NYnleSfrQ6F1xDFf8cEkRsnxb6co9C4Qu1hlrigluG93hD0iHqWCO7LuHsef81bg4uYvowai5kBFGTxzCv/w7KUIc0JiXXx+idGiGQzp8JGBktNqyKM4/DMU4moxmPpDhbDS6ICfmKxmOIqHxjQ3Tq56akObbShKiXNpzRpCbDtKzBvmE5FwMOTPzIHzTcDSB3/A3HY2EEOvw+UoEoG9ICEm+rSxhCP5kVV0MSLvGgHTTUXo8d4/o96V8d3/0KzI+M+eFEJ6i71tSa4o8s/j7MwlRQGPeLkmoLAMekkkuGozIeIvS1pSzM5JTNXvP2xNCuMSGkw5TmNaOhfSxhBDn28oSGor70ijWUXdGp430MPXpZSi7SidN3mASwjae/N4SkhU6Tct32YS4gJjdclKEECbKz7JWRVT1x6HvkI+kh+mErSbSC8zEupdamib6c3ovDtLPPQVh8wp2olWCEDqk66wgN7Mgjv+mS4ZilBrSEzYHS75K1JES3q8FEuJ1f39REuKARnFCdS6NDlIQvulSY54apmyUptcnydAFJfyBvw9739jrjj48qwhxvs2SEsp8GujMZYcuukTzXpfv0F5ymHKWJvITpiYZuqCEX76gv9j7xl73y4elkvAYugXXZqtg5V4I3sjMpTEm2Gt05kjdBsXNFsZ6IvCnwmuU8O2xjXsNHiaG50OkJER9bZnFKvfQDSPZuTSmOERi66jbxDkZCguLhy43UlPRJ0r4jozH72C+IF73tw/ZMz4UsRwsp3IPOqQS60fknIxmVGc6OyGfT8VzziP+66OTNyNyDtLDjBB+fsK2Bc6WT+i3lqsnonsGISsgRoTMvKQJ0RjNrrrwx6T9JWzj35LXKTddDAQA53t8Dj+TjpBSwt7qB/62FVn9ASfuOI+wedxmnagmzLuDmQ1SfBMwddxSw1QMVyG9H4ZdXxIhpYQvK+yIAq+ceN1fFz9yCWFAAyOqCUOprlzHECAyATLk1DD1vXQQyr5xVpKIKCF8Xq3w98VuDXZooifkmCkJ0f1tMPypJnQVoQtxkJIlIfVSjXXq4p2NDYm8fH9KKkoJl/cLOl+Qnutd0UWigpArB1MRwuIuQxEcZDM8jT4x7yzd9bPbtiGR9durK0E9ShhffvdolLRX5OB/C/q2gpDLt6kIYS7tRBGmH9Grjk6YI3q1XaY/OAzEqByR6LMQoacI0RW9+v67R3NFdM9CpirC5g9SDqYiBO+rcmlskLI46uySdo1kjvEHD/KIcPSFi20zwuMmueg+42k+Xg6TNZSaEAY0QDpQUblngrlQlUvr3tD+omaFi6hJI3Oz0aUwMVJ5Of70DcuCEjbZigmvKzijGhOmrRQTlG9TV+5Nc+rz2CTe9yUHJcMUnpfhY2reALL2Gv1YGo2GR/wGO37lYB40NtZOfITYa9v5y/P+ypL34Py76sq9nD5ky8E2dx66ZLGRkQKIZTgY00Y8Yqw9FEZ4G78SLPBPQEg+bKNzIpeGB051aCqjiTnXIRukR+dDKiMWus8uSvFHw5v0YD0NEoTGOH4V8HFW8DZPmC3BbwOmopTrw6naltL1rnHzyAmLgKvMcDxYz1Ih4gdPQuj8ZA2W4Bw4JLinIvRg14d5K2DlfOg3jBxRl075QfArES2PAgmhxw3TS68oIZyXQMWimlCVjuHmhUxRFvO/jy+VoH8kfODRSxPyw/S2UZDQg2FqsPFCThQDdmKGXzrIzUOoK2+8PlR3zBvWO0dC6NFT+RwUJXRYok1NiNKi0hkjf5Cqb04M+vhsB5xdjWSEDbokO/EKEjrwpITpOE2KEBkb6fqwwCA1DEUfcpcM60U4PaQIia9nY/XzCfs2AcwltDPX+OnlnkSyh6nTZ9cMlxr+6EkIyWs8m+QTwmHRcSWEksq9zJpnvwBg9jCd8Aqx9YicsIFdizOvGCGbKQpV7oXgjbRRZBEZ4/EsIY/UBtkB/xnOPfL6nEacscwg/Hl6d3d36hQcpXDYW1bByj1zKr/3gK2Slv8MEzJglyhfXDN5oD0a9AWNGOGYH5WUsOFAIS9yCD0YEaJ3tOVW7qHsaDLm7Qe0ZdrBZqsqvrjm/NQ4GuCvEVWa0OZRQ04oSB6hgxcVlFARxYAyl+UtuMiZZLpkK2ObvjkAa4RoPEp3ocMGPPTKNiR0gLvM3VmaT4iW+onc04Au1tNJGC6ZwcIbXeyu9iZd0cw0PC628VM6H5Yj7IO3uLuDi9TTSPKHbGBJ8r0stU9DVKyWxu7NfE4zLxhziwzUtxsRBnBPEO6KK0JopXLA3CCVlZZwV6kBbZTf4M3Y88k4CKDtCIKP/ErxTuZ5lyNEk+t12ZqoVMUXy0/Y79OAvKVFZ2CSXAxGp0c3P2+OTsXjGGgTwgA5pGUJ4W39fC3GiLaTL+TZ4hgNU0cem0nIpbMxIbRadmiWrmtLFHizhH1GMIblL4wIdL2fqpuSCB6jmxHC2IRVvnLPFmuiOH0zloDn7LpDJ2Z0YuQIiWFsQgiDVCB0Ub5yT9zekis7yCojYgYEW9NuX+2q/6aA1QmxQ9qqsuceytHgCCg3GcjmisQ4buMm/vmv7Ksxegw4RasSIoe0bVTac8/ltpnlBmnWbXos0shdv7OuPFJqtG88XtmqhB48rS7VGV1khe/sCsG/aMbgFk6ZgRguxnHH+nk2+dhLBT+WJ54jappDSKeqxBtwTkJ3sFUhnHN13qMBkSxAvg1nbYO+5wSNh9/P66ht2+1o/dw7c4KUwfACLDLAGFH+Ngw7Yoe0CiFaY2SWRhUTDOAEjte/7ffhP3KKCnLLbT5Q6f7DLexd5vTz9awsKHTR2oAQb/exAeJEJ6D30WBdWPUe0hC8klezFxJPaxcCC0bnwYqEU3UBWJ4EWrtQDF1UJFSWe+eLRr4GyqWxDZUq7rnX2mj7K61d6PBVUEa2T5O3fx06SRXvA9bIh9Oo4Tb23Kt+L7femQLn0raw555b9X58vTMFDF24HVOqc7l9oloh+FNhTwWtMwXKpdlb2QkL1/KVnjH0mplLdAFtZ68vVI9Zem8TjXw4l+ZubTczq8r+NHrNDAxdWNvbr80tvz3yJF/N6oJCF65S53KE0NiU2ydKr0NKQxdb23PPLbvXl96ZgoUutrbnninNtylEI5+QS9venntmuT339M4UIHSx9T33VJsP1N2FsNjTLaAzEjZgc3YGK7P3pd6ZAubSpkV0Lkc4L75/qd6ZAjqkYSGdyxGi3coL7UGrP3QBi7u2Tgir4IvsI6zXzKBcWkcHYeENlTTy4Vwae7jVdgkLboql1cw4uAxYDyHqxLw92WtwSMMSOpd8vkUIejJnX339oQtrWoowf889nhDMGOpnI+h1SGEW0zXL6FzyabmgE9XPt9A7U8BcWoZy23laLgxPFikD1iIodBG2yunMt85biVj57qlGvlhQ1YXm5x+q8236c2lga129hMpNk2vIpcXejO5nWMJxmuHY1BC6mOt/SqcJLnT53l56c2lnuAv1P4c0e9OM7eXnZYR0L0/thO2sgEYNoYvQrIMwM9+mkY/m0uohtOXPIdUfusDbCNXwtNx0AXFNM4WZclP0PC3Xkm4EVkcuTVSjmM5VniVrmtP0M531hy7Y/RTan5YrfbiVRj48U7gpNTQSmvPks9VryKXN02poJMS7S1D3tKZcWp2EKN9WUxcKT+mqi9Cc8/m2GnJpoVQNjYQWdk/9GmYK6JCacjU0EtpttttSHaGLLDU0EnIBDY18NJdWnbCKT4Maozuih7WUAScIS/k0eZV7wmHxKH6Atd6ZApUBq9TYvHKPBVpFp76Fdx9EN91pkgl0SNsqNTav3EutnmhjeEf08veRRgFjFF4OCjWUOldaH9LGqBO1C1xx74bQtPjHK+uSaStPDY2EMWLBmo/qggB3RmharuvOW8xOu0zY0daUHS3duFNEDY2EQIRiVCpC/sTcvPEOCV934z+NMK8KztrDxoUr9/ZXClfuQbH2sPEGq6c9aXwgfJVKHwgPhK9f6QPhn0aYN+OLX72HjUtW7u1hYwGWrU3zq+D2sfHeLIgO68MD4etX+kB4IHz9Sh8ID4SvX+lyhP8Dil3NhOtXkbUAAAAASUVORK5CYII=",
    "https://www.svgrepo.com/show/117653/sql-file-format.svg",
    "https://cdn.worldvectorlogo.com/logos/swift-15.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
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
    "Sketch",
];

export let URL  = [
    "Python",
    "C",
    "Java",
    "C++",
    "C#",
    "JavaScript",
    "Assembly language",
    "SQL",
    "Swift",
    "R",
    "PHP",
    "Classic Visual Basic",
    "Groovy",
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
    "Sketch",
];