var btn = document.querySelectorAll(".key li");
input = document.querySelectorAll(".input-valor"),
operador = document.querySelectorAll(".operador");



for(var i=0; i<btn.lenght; i++){
document.onkeypress = function(event){
var key = event.charcode;
//Mudança para o navegador
//Firefox interpretar a calculadora
for(var e = 0; e <= 10; e++){
    if(key=== (48+e)){
        input.innerHTML += e;
    }
}
 switch (key){
    case 1:
    input.innerHTML += "*";
    break;
    case 2:
    input.innerHTML += "+"
    break;
    case 3:
    input.innerHTML += "-"
    break;
    case 4:
    input.innerHTML += "."
    break;
    case 5:
    input.innerHTML += "/"
    break;
case 13:
case 61:
var equacao = input.innerHTML;
 try{
     input.innerHTML = eval(equacao);
 } catch (e){
     alert('erro na expressão')
 }
 break;
    case 89:
        case 9:
            input.innerHTML = "";
            break;
        default:
            break;
}
}
}

btn [i].addEventListener ('click', function(){
    var btnval = this.innerHTML,
    inputval = input.innerHTML;
})
