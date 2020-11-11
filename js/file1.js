var billTotal;
const calculateTip = (perc) => {
    billTotal = document.getElementById("tipvalue").value;
    if (billTotal > 0) {
        var tip = Math.round((billTotal * perc * 100)) / 100;
        alert(`You should tip ${tip}!`);
    } else {
        alert('Bill Total Value is empty!');
    }
};

const custom = () => {
    
}

const checkJavascript = () => {
    document.getElementById('js').innerHTML="Javscript is Working!";
    document.getElementById('js').style="color: green;";  
};