var valorF = ""
var celsius = ""

function converte(){
    valorF = document.getElementById("valor").value;
    celsius = parseInt((valorF - 32) / 1.8);
    document.getElementById("output").innerHTML = celsius;
}