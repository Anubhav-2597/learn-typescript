// function declaration
function fullName(first: string, last: string) : string{
    return first + " " + last;
}

//function expression
var otherFullName : (first: string, last: string) => string;

otherFullName = function(first: string, last: string) {
    return first + " " + last;
}

//
var thirdFullName : (first: string, last: string) => string = function(first: string, last: string){
    return first + " " + last;
}

console.log(fullName("anubhav","ajmera"));
console.log(otherFullName("anubhav", "ajmera"));
console.log(thirdFullName("anubhav","ajmera"));