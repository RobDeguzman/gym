console.log("Hello World");

function bmi(){
    var height = parseFloat(document.getElementById("He").value)
    var weight = parseFloat(document.getElementById("We").value)
    var age = parseFloat(document.getElementById("Ag").value)
    var H = 6.25
    var W = 10
    var A = 5


    var bmi= (W * weight) + (H * height)-(A* age) + 5;
    var userBMI=document.getElementById("bmi_index")
    userBMI.textContent=bmi.toFixed(2)

}