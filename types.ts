//boolean
let paidAccount : boolean = true;
console.log(paidAccount);

//Number
let age : number = 33;
var taxRate : number = 44.5;
console.log(age);
console.log(taxRate);

//String
var fullName : string = "Anubhav Ajmera";
console.log(fullName);

//Array
var ages : number[] = [12, 28, 31];
console.log(ages);

//Tuple
let player : [number, string, number, number];
player = [1, 'apple', 22, 33.5];
console.log(player);

//enum
enum ApprovalStatus {approved, pending, rejected};
let job : ApprovalStatus = ApprovalStatus.pending;
console.log(job);

//Any
var apiData : any[] = [123, "Jordan", false];
console.log(apiData);

//void
function printOut(msg: string) : void {
    console.log(msg);
}