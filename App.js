//Creating elements

let title = document.getElementById("title");
let number = document.getElementById("number");
let button = document.getElementById("button");
let lotteryImage = document.getElementById("lottery_image");
let results = document.getElementById("results");
let rules = document.getElementsByClassName("rules")[0];
number.focus();
let luckyNumbers = [];



button.addEventListener("click", ()=>{
    number.addEventListener('mouseover',()=>{
        window.location.reload(false);
    });
    for ( let i = 0; i <number.value; i++){
        for(let j =0; luckyNumbers.length < 6; j++){
        let randomNum = Math.floor(Math.random()*90) + 1;
        if(luckyNumbers.indexOf(randomNum) === -1){
            luckyNumbers.push(randomNum);
        }
        }
let sorted = luckyNumbers.sort((a,b)=> a-b)
for ( let k = 0; luckyNumbers.length <7; k++){
    let randomNum = Math.floor(Math.random()*90) + 1;
    if(luckyNumbers.indexOf(randomNum) === -1){
        luckyNumbers.push(randomNum);
    }
}

luckyNumbers.push(Math.trunc(Math.random()*90)+1);

results.innerHTML += sorted[0]+"-"+sorted[1]+"-"+sorted[2]+"-"+sorted[3]+"-"+sorted[4]+"-"+sorted[5]+"|"+sorted[6]+"|"+sorted[7];
results.innerHTML += '<hr>'
lotteryImage.style.display= "none";
rules.style.display = "none";
luckyNumbers = [];
}
})

document.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
    button.click();
    }
})
