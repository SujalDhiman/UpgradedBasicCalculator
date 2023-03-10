let buttonPress=document.querySelectorAll(".btn")
let display = document.querySelector("#pwd");
let display2=document.querySelector("#finalDisplay")
display.focus()
buttonPress.forEach((element,index)=>
{
    buttonPress[index].addEventListener("click",()=>
    {
        let symbol=buttonPress[index].innerText
        displayOnInput(symbol)
    })
})

function displayOnInput(val1)
{
    if (val1 === "+" || val1 === "-" || val1 === "*" || val1 ==="/") 
    {
        display.value = display.value+val1;
    }
    else if (val1 === ".") 
    {
        display.value =display.value+val1;
    } 
    else if (display.value === "0") 
    {
        display.value = val1;
    } 
    else 
    {
        display.value =display.value+val1;
    }
}

let finalResult=document.querySelector(".submit")
finalResult.addEventListener("click",()=>
{
    let expression=display.value
    display2.value=expression
    let finalAnswer=eval(display.value)
    if(Number.isInteger(finalAnswer))
    display.value=finalAnswer
    else
    display.value=finalAnswer.toFixed(6)
})

let reset=document.querySelector("#clear1")
reset.addEventListener("click",()=>
{
   display2.value=""
   display.value=""
})

let back=document.querySelector("#back1")
back.addEventListener("click",remove)

function remove()
{
   let letterToDelete=display.value
   let len=letterToDelete.length
   letterToDelete=letterToDelete.substring(0,len-1)
   display.value=letterToDelete
}
