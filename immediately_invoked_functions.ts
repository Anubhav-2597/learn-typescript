var names : string[] = ["anu", "achal", "anshul"];
var counter : number = 0;

(function() {
    for (let name in names){
        counter++;
    }
})();

console.log(counter);