const w = document.querySelector("#width");
const h = document.querySelector("#height");
const f = document.querySelector("#fontSize");
const bc = document.querySelector("#bgColor");
const c = document.querySelector("#color");

const ot = document.querySelector("#outputText");
const resultInput = document.querySelector(".result-input");

const resultBtn = document.querySelector("#resultButton");

resultBtn.addEventListener("click", function(){

  const fontBtn = document.querySelector("[name = fontWeight]:checked");
  const  textBtn = document.querySelector("[name = textAlign]:checked");
  const  verticalBtn = document.querySelector("[name = verticalAlign]:checked");

  resultInput.innerText=ot.value;
  
  resultInput.style.width=w.value + "px";
  resultInput.style.height=h.value + "px";

  resultInput.style.backgroundColor=bc.value;
  resultInput.style.color=c.value;

  resultInput.style.fontSize=f.value + "px";
  resultInput.style.fontWeight=fontBtn.value;

  resultInput.style.justifyContent=textBtn.value;
  resultInput.style.alignItems=verticalBtn.value;
  

  resultInput.style.verticalAlign=verticalBtn.value;

})





  

 