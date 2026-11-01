// FOR LOOP
let alphabets = "ABCDEFGHIJKLMNO"
for( let i=0; i< 15; i++){
    console.log(alphabets[i])
}
//WHILE LOOP
let firstNo = 23
let secondNo = 86
while(firstNo<=secondNo){
    console.log(firstNo)
    firstNo++
    
}
// FUNCTIONS
    
function numbers(Even, Odd) {

    let EvenNumber = Even % 2 === 0;
    let oddNumber = Odd % 2 !== 0;

    if (EvenNumber && oddNumber) {
        return Even + " is an even number and " + Odd + " is an odd number";
    }
}

let result = numbers(2, 5);

console.log(result);