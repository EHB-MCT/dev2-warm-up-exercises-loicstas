import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1(); 
warmup2(); 

function warmup1() {
    console.log("Exercise week 1");
    const button = document.querySelector('#button-1a')
    button.addEventListener('click', function () {
        console.log("button ok ");
});
    document.querySelector('#content-1').innerHTML = '<p>hello world</p>'
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
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}