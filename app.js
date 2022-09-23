//#ff09ff
let alphNum = "ABCDEF0123456789";
//console.log(alphNum[0]); // A



//console.log(alphNum.split(""));



//button
const button = document.getElementById("button");
console.log(button);

//background color
function changecolor() {
    let colorCode = "#";
    const bgColor = document.getElementById("canvas");
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 16);
        //console.log(randomNum);
        colorCode += alphNum[randomNum];
        console.log(colorCode); //#02C98E
    }
    bgColor.style.backgroundColor = colorCode;
}

button.addEventListener("click", changecolor)