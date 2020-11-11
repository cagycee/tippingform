var billTotal;
const calculateTip = (perc) => {
    billTotal = document.getElementById("tipvalue").value;
    if (billTotal > 0) {
        //var tip = Math.round((billTotal * perc * 100)) / 100;
        var tip = billTotal*perc;
        document.getElementById('tipAmount').innerHTML=`$${tip.toFixed(2)}`;
    } else {
        alert('Bill Total Value is empty!');
    }
};
const calculateTipCustom = (perc) => {
    billTotal = document.getElementById("tipvalue").value;
    customBillTotal = document.getElementById("cTip").value / 100;
    if (billTotal > 0 && customBillTotal > 0) {
        var tip = billTotal*customBillTotal;
        document.getElementById('tipAmount').innerHTML=`$${tip.toFixed(2)}`;
    } else {
        alert('Bill Total Value is empty!');
    }
};
const custom = () => {
    //document.getElementById('tipButtons').innerHTML=document.getElementById('customTip').innerHTML;
    cc.HTML.replace('tipButtons', cc.HTML.value('customTip', 'html'));
};

const backBut = () => {
    //document.getElementById('tipButtons').innerHTML=document.getElementById('backBut').innerHTML;
    cc.HTML.replace('tipButtons', cc.HTML.value('backBut', 'html'));
}

const checkJavascript = () => {
    //document.getElementById('js').innerHTML="Javscript is Working!";
    cc.HTML.replace('js', 'Javascript is Working!');
    document.getElementById('js').style="color: green;"; 
};