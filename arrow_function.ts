// var fullName = (first, last) => {
//     return(first + " " + last);
// }
// console.log(fullName("Anubhav", "Ajmera"));
var gradeGenertaor = (grade) => {
    if (grade < 60) {
        return 'F';
    }
    else if (grade >= 60 && grade < 70) {
        return 'D';
    }
    else if (grade >= 70 && grade < 80) {
        return 'C';
    }
    else if (grade >= 80 && grade < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
}
console.log(gradeGenertaor(45));
console.log(gradeGenertaor(100));
console.log(gradeGenertaor(80));

//# sourceMappingURL=functions.js.map