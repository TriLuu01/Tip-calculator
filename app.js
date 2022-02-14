function getEle(id){
    return document.getElementById(id);
}

function calculateTip(){
    var billAmount = getEle("billamt").value;
    var tipQual = getEle("serviceQual").value;
    var partyNum = getEle("peopleamt").value;

    //Validation
    if ((billAmount === "") || (tipQual == 0)){
        alert("Please enter amount");
        return;
    }

    //Validate share party
    if(partyNum === "" || partyNum <=1){
        partyNum =1;
        getEle("each").style.display = "none";
    }else {
        getEle("each").style.display = "block";
    }

    var billTip = (billAmount*tipQual + parseInt(billAmount))/partyNum;
    billTip = Math.round(billTip*100)/100;
    billTip = billTip.toFixed(2);

    getEle("totalTip").style.display = "block";
    getEle("tip").innerHTML = billTip;
    
}

//Display tip
getEle("totalTip").style.display = "none";
getEle("each").style.display = "none";

getEle("calculate").onclick = function(){
    calculateTip();
}