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