function BMR() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var a=document.getElementById('a').value;

    var H = 6.25
    var W = 10
    var A = 5

    var BMR= (W * w) + (H * h) - (A * a) + 5;
    var BMRO=(BMR.toFixed(2));

    document.getElementById("Results").innerHTML="Your BMR is " + BMRO;



}