// var x : number = 0;

// while(x<10){
//     console.log(x);
//     x++;
// } 

var players : number[] = [1, 10, 22, 45, 60];

console.log("for/In");
for (let player in players){
    console.log(player);
}

console.log("for/Of");
for (let player of players){
    console.log(player);
}