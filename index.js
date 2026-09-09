const numbers= document.querySelectorAll('button');
const input= document.getElementById('input');
const answer= document.getElementById('answer');
const prod= document.getElementById('prod');
const delet= document.getElementById('delete');
const clear= document.getElementById('clear');


let inpu= "";

numbers.forEach((number) => {
    number.addEventListener("click",()=> {
    if (!number.value) 
    return;
        inpu += number.value;
        input.textContent= inpu
    .replaceAll("*", "×")
    .replaceAll("/", "÷");;
        
        });
});



prod.addEventListener("click", ()=>{
const realInput= eval(inpu);
    answer.textContent= realInput;
});

delet.addEventListener("click", ()=>{
    inpu = inpu.slice(0, -1);
    input.textContent = inpu || "0";
});
clear.addEventListener("click", ()=>{
    inpu ="";
    input.textContent = "0";
    answer.textContent = "0";
});


|