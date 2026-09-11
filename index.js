const numbers= document.querySelectorAll('.numb');
const input= document.getElementById('input');
const answer= document.getElementById('answer');
const prod= document.getElementById('prod');
const delet= document.getElementById('delete');
const clear= document.getElementById('clear');
const toggle= document.getElementById('toggle');
const toggle2 = document.getElementById('toggle2');


toggle.addEventListener("click", ()=>{
    document.querySelector('body').classList.add("darkmode");
});
toggle2.addEventListener("click", ()=>{
    document.querySelector('body').classList.remove("darkmode");
});

let inpu= "";

numbers.forEach((number) => {
    number.addEventListener("click",()=> {
    if (!number.value) 
    return;
    if (inpu === "" && ["+", "-", "*", "/"].includes(number.value)){
    return;
};
        inpu += number.value;
        input.textContent= inpu
    .replaceAll("*", "×")
    .replaceAll("/", "÷")
    .replaceAll("/100", "%");;
    shrinkInput();
        
        });
});



prod.addEventListener("click", ()=>{
const realInput= eval(inpu);
    answer.textContent= realInput;
});

delet.addEventListener("click", ()=>{
    inpu = inpu.slice(0, -1);
    input.textContent = inpu || "0";
    shrinkInput();
});
clear.addEventListener("click", ()=>{
    inpu ="";
    input.textContent = "0";
    answer.textContent = "0";
    shrinkInput();
});

function shrinkInput(){
    let size = 44;
    input.style.fontSize = size +"px";
    while(input.scrollWidth > input.clientWidth && size > 15){
    size--;
    input.style.fontSize= size + "px";
    };
};



