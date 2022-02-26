//GLOBALS
var result="";
var calculation;
var acumulado ="";

//FUNCTIONS
var getOperator = () => document.getElementById("input-operator").value
var clean = () => document.getElementById("input-operator").value = "";
var selectFocus = () => document.getElementById("input-operator").focus();
selectFocus();

var submitOperator = () => {
    acumulado = document.getElementById("result").innerHTML;
    result = getOperator();
    document.getElementById("result").innerHTML=(acumulado + result);
    errorHandler();
    clean();
}

var getPartial = () => {
    acumulado = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=(acumulado + calculation)
}

function pressSum(){
    calculation="+";
    getPartial();
    clean();
    errorHandler();
    selectFocus();
    
}

function pressSubs(){
    calculation="-";
    getPartial();
    clean();
    errorHandler();
    selectFocus();
}

function pressMult(){
    calculation="*";
    getPartial();
    clean();
    errorHandler();
    selectFocus();
}

function pressDiv(){
    calculation="/";
    getPartial();
    clean();
    errorHandler();
    selectFocus();
}

function getResult (){
    var finalResult = document.getElementById("result").innerHTML;
    finalResult = eval(finalResult);
    document.getElementById("result").innerHTML = "Result = " + finalResult;
    disableButtons();
    document.getElementById("input-operator").disabled = true;
}

 function reset(){
     document.getElementById("input-operator").value = "";
     document.getElementById("result").innerHTML = "";
     enableButtons();
     document.getElementById("input-operator").disabled = false;
     selectFocus();
}

function disableButtons(){
    document.getElementById("button-sum").disabled = true;
    document.getElementById("button-subtraction").disabled = true;
    document.getElementById("button-multiplication").disabled = true;
    document.getElementById("button-division").disabled = true;
    document.getElementById("button-result").disabled = true;
}

function enableButtons(){
    document.getElementById("button-sum").disabled = false;
    document.getElementById("button-subtraction").disabled = false;
    document.getElementById("button-multiplication").disabled = false;
    document.getElementById("button-division").disabled = false;
    document.getElementById("button-result").disabled = false;
}

//ERROR CONTROL
function errorHandler(){
    var finalResult = document.getElementById("result").innerHTML
    var lastChar = finalResult.slice(-1);
    
    if (lastChar == "-" || lastChar == "+" || lastChar =="*" || lastChar =="/"){
        disableButtons();
    } else {
        enableButtons();
    } 
}

//VALIDATE THAT ONLY NUMBERS ARE ENTERED
function onlyNumbers(e){
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;
        return /\d/.test(String.fromCharCode(keynum));
}

//EVENT LISTENERS
document.getElementById("input-operator").addEventListener("change", submitOperator);
document.getElementById("button-sum").addEventListener("click", pressSum);
document.getElementById("button-subtraction").addEventListener("click", pressSubs);
document.getElementById("button-multiplication").addEventListener("click", pressMult);
document.getElementById("button-division").addEventListener("click", pressDiv);
document.getElementById("button-result").addEventListener("click", getResult);
document.getElementById("button-reset").addEventListener("click", reset);
