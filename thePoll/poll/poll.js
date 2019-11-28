/** VARIABLES */
const database= dirname__ + '/database.json';
let quest= document.getElementById('question').nodeValue.JSON.stringify();
let ansNum= document.getElementById('ansNum').nodeValue;
let answ= [];
//let answ= document.getElementByUd('').JSON.stringify();

/** FUNCTIONS */

function createPoll(quest, ansNum){
    return {
        "question": quest,
        "answers": answ
    }
}
/** END */
console.log('File written to database.json');