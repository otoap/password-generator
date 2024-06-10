"use strict"

//range input
let quantity = document.getElementsByTagName("span")[0]
let range = document.getElementById("length");

range.addEventListener("input", ()=> {
    quantity.innerHTML = range.value;
    range.style.background = `linear-gradient(to right, #a4ffaf ${range.value*5}%, #18171f ${range.value*5}%)`;
})

//checkbox
let checkBox = document.getElementsByClassName("checkbox")
let checkBoxArr = Array.from(checkBox);

let count = 0;

checkBoxArr.forEach((element) => {
    element.addEventListener("click", ()=> {
        if(element.style.backgroundImage && element.style.backgroundImage!="unset"){
            element.style.border = "solid 2px #e6e5ea"
            element.style.backgroundColor = "#24232c"
            element.style.backgroundImage = `unset`
            count--;
            switch (count) {
                case 3:
                    cube[count].style.backgroundColor = "#18171f";
                    cube[count].style.border = "solid 2px #e6e5ea";
                    cube[count-3].style.backgroundColor = "#f8cd65";
                    cube[count-2].style.backgroundColor = "#f8cd65";
                    cube[count-1].style.backgroundColor = "#f8cd65";
                    level.innerHTML = "MEDIUM"
                    break;
                case 2:
                    cube[count+1].style.backgroundColor = "#18171f";
                    cube[count].style.backgroundColor = "#18171f";
                    cube[count].style.border = "solid 2px #e6e5ea";
                    cube[count-2].style.backgroundColor = "#fb7c58";
                    cube[count-1].style.backgroundColor = "#fb7c58";
                    level.innerHTML = "WEAK"
                    break;
                case 1:
                    cube[count+2].style.backgroundColor = "#18171f";
                    cube[count+1].style.backgroundColor = "#18171f";
                    cube[count].style.backgroundColor = "#18171f";
                    cube[count].style.border = "solid 2px #e6e5ea";
                    cube[count-1].style.backgroundColor = "#f64a4a";
                    level.innerHTML = "TOO WEAK!"
                    break;
                case 0:
                    cube[count+3].style.backgroundColor = "#18171f";
                    cube[count+2].style.backgroundColor = "#18171f";
                    cube[count+1].style.backgroundColor = "#18171f";
                    cube[count].style.backgroundColor = "#18171f";
                    cube[count].style.border = "solid 2px #e6e5ea";
                    level.innerHTML = "LEVEL"
                    break;
            }
        }else {
            element.style.border = "unset"
            element.style.backgroundColor = "#a4ffaf"
            element.style.backgroundImage = `url("./images/icon-check.svg")`
            count++;
            switch (count) {
                case 1:
                    cube[count-1].style.backgroundColor = "#f64a4a";
                    cube[count-1].style.border = "unset";
                    level.innerHTML = "TOO WEAK!"
                    break;
                case 2:
                    cube[count-2].style.backgroundColor = "#fb7c58";
                    cube[count-1].style.backgroundColor = "#fb7c58";
                    cube[count-1].style.border = "unset";
                    level.innerHTML = "WEAK"
                    break;
                case 3:
                    cube[count-3].style.backgroundColor = "#f8cd65";
                    cube[count-2].style.backgroundColor = "#f8cd65";
                    cube[count-1].style.backgroundColor = "#f8cd65";
                    cube[count-1].style.border = "unset";
                    level.innerHTML = "MEDIUM"
                    break;
                case 4:
                    cube[count-4].style.backgroundColor = "#a4ffaf";
                    cube[count-3].style.backgroundColor = "#a4ffaf";
                    cube[count-2].style.backgroundColor = "#a4ffaf";
                    cube[count-1].style.backgroundColor = "#a4ffaf";
                    cube[count-1].style.border = "unset";
                    level.innerHTML = "STRONG"
                    break;
            }
        }
    })
})

//level strength checker
let level = document.getElementsByClassName("level")[0];
let cube = document.getElementsByClassName("cube");
cube = Array.from(cube);

//button COPY
let copy = document.getElementsByTagName("button")[0];
let password = document.getElementById("password");
let copied = document.getElementsByClassName("top-btn-p")[0];
let holder;

copy.addEventListener("click", ()=> {
    holder = password.textContent;
    navigator.clipboard.writeText(holder)
    if(copied.textContent.length == 0) {
        copied.innerHTML = "COPIED"
    }else{
        return
    }
    
})


//button GENERATE
let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowCase = "abcdefghijklmnopqrstuvwxyz";
let numList = "0123456789";
let symbol = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

let symbolsArr = [upCase, lowCase, numList, symbol];

let newArr = []

let pas = ""

let btn = document.getElementsByTagName("button")[1];


btn.addEventListener("click", ()=> {
    checkBoxArr.forEach( (element, index)=> {
        if(element.style.backgroundImage != "unset" && element.style.backgroundImage) {
            newArr.push(...symbolsArr[index]);
        }
    })
    if(newArr!=0) {
        for(let i=0; i<range.value; i++) {
            
            pas+=newArr[Math.floor(Math.random()*newArr.length)]
        }
    }else {
        alert("mark which symbols do you want for your password :)")
    }
    console.log(pas)
    if(pas.length!= 0){
        password.innerHTML = pas;
        pas = "";
    }else {
        return
    }
})

//input როგორ უნდა იყოს პასვორდის გარემო და მომხმარებელს არ მივცე ჩაწერის უფლება
