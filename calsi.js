function turnOn(){
    let inputfield=document.getElementById("inputfield")
    inputfield.style.visibility="visible"
}
function turnOff(){
    let inputfield=document.getElementById("inputfield")
    inputfield.style.visibility="hidden"
}
var inputValue=document.getElementById("inputfield")
function getValues(num){
    inputValue.value=inputValue.value+num
}
function clearOneChar(){
    inputValue.value=inputValue.value.slice(0,-1)
}
function clearAll(){
    inputValue.value=""
}
function calculate(){
    try{
        inputfield.value=eval(inputfield.value)
    }
    catch(error){
        inputfield.value=inputfield.value.innerHTML="invalid expression"
    }
}