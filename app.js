//#ff09ff
let alphNum = "ABCDEF0123456789";
//console.log(alphNum[0]); // A
let colorCode = "#";



//console.log(alphNum.split(""));

for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    //console.log(randomNum);
    colorCode += alphNum[randomNum];
    console.log(colorCode); //#02C98E
}

const button = document.getElementById("button");