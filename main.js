import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1(); 
warmup2(); 
warmup3();
warmup4();


    function warmup1() {
        console.log("Exercise week 1");
        document.getElementById("button-1a").addEventListener("click", function () {
            const content1 = document.getElementById("content-1");
            content1.textContent = "Hallo, dit is de oefening van Hamza";
        });
    
        document.getElementById("button-1b").addEventListener("click", function () {
            const section1 = document.getElementById("section-1");
            section1.style.backgroundColor = "lightblue";
        });
    
        document.getElementById("button-1c").addEventListener("click", function () {
            const content1 = document.getElementById("content-1");
            const h1 = document.createElement("h1");
            h1.textContent = "Ik ben er klaar voor.";
            content1.appendChild(h1);
        });
    }

function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
    //get ther button
    const button = document.querySelector('#button-2a')
    button.addEventListener('click', function () {
    console.log("button ok ");
        
        let html = '<ul>'; 
        scores.forEach (function (score) {     
        console.log(scores);
        console.log (score);
        html += <li>(score)</li>
    })
        

    }); 
    html += '</ul>'; 

const html='<ul><li>ok</li></ul>'
document.querySelector('#content-2').innerHTML = html;
}





function warmup3() {
    let student = getStudentJSON();
    console.log (student); 
    
    const studentobject = JSON.parse(student); 
    console.log(studentobject); 

    document.querySelector('#constent-3').innerHTML = <h2></h2>
}


function warmup4() {
    let main, min, max;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric')
    .then(function (response) {
        // Check if the response is successful (status 200-299)
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        // Parse the JSON response and return it as a Promise
        return response.json();
        })
        .then(function (data) {
        // Work with the parsed JSON data
        console.log('Parsed JSON response:', data);
        })
        .catch(function (error) {
        // Handle any errors that occurred during the fetch or parsing
        console.error('Error fetching data:', error);
        });
        
}

function warmup5() {

}