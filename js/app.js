var display = document.getElementById('display')

var calculadora = {

    init: function(){
      var self = this
      var cero = document.getElementById('0')
      var uno = document.getElementById('1')
      var dos = document.getElementById('2')
      var tres = document.getElementById('3')
      var cuatro = document.getElementById('4')
      var cinco = document.getElementById('5')
      var seis = document.getElementById('6')
      var siete = document.getElementById('7')
      var ocho = document.getElementById('8')
      var nueve = document.getElementById('9')
      var punto = document.getElementById('punto')
      var on = document.getElementById('on')
      var sing = document.getElementById('sign')
      var raiz = document.getElementById('raiz')
      var div = document.getElementById('dividido')
      var por = document.getElementById('por')
      var resta = document.getElementById('menos')
      var suma = document.getElementById('mas')
      var igual = document.getElementById('igual')
      var numero1=" "
      var numero2=" "
      var resultado=" "
      var operador=""

      cero.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML ="0";
           }else{
            display.innerHTML += "0";}
          }else{}
      })
      cero.addEventListener("mousedown",function(){
         cero.setAttribute("style","transform:scale(0.95,0.95)")
      })
      cero.addEventListener("mouseout",function(){
         cero.setAttribute("style","transform:scale(1,1)")
      })
        uno.addEventListener("click",function(){
          if(display.innerHTML.length<=7){
           if(display.innerHTML === "0"){
              display.innerHTML ="1";
              }else{
               display.innerHTML += "1";}
             }else{}
                   })
      uno.addEventListener("mousedown",function(){
         uno.setAttribute("style","transform:scale(0.95,0.95)")
      })
      uno.addEventListener("mouseout",function(){
         uno.setAttribute("style","transform:scale(1,1)")
      })
      dos.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML ="2";
           }else{
            display.innerHTML += "2";}
          } else{}
      })
      dos.addEventListener("mousedown",function(){
         dos.setAttribute("style","transform:scale(0.95,0.95)")
      })
      dos.addEventListener("mouseout",function(){
         dos.setAttribute("style","transform:scale(1,1)")
      })
      tres.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML ="3";
           }else{
            display.innerHTML += "3";}
          }else{}
      })
      tres.addEventListener("mousedown",function(){
         tres.setAttribute("style","transform:scale(0.95,0.95)")
      })
      tres.addEventListener("mouseout",function(){
         tres.setAttribute("style","transform:scale(1,1)")
      })
      cuatro.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML ="4";
           }else{
            display.innerHTML += "4";}
          }else{}
      })
      cuatro.addEventListener("mousedown",function(){
         cuatro.setAttribute("style","transform:scale(0.95,0.95)")
      })
      cuatro.addEventListener("mouseout",function(){
         cuatro.setAttribute("style","transform:scale(1,1)")
      })
      cinco.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML ="5";
           }else{
            display.innerHTML += "5";}
          }else{}
      })
      cinco.addEventListener("mousedown",function(){
         cinco.setAttribute("style","transform:scale(0.95,0.95)")
      })
      cinco.addEventListener("mouseout",function(){
         cinco.setAttribute("style","transform:scale(1,1)")
      })
      seis.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML ="6";
           }else{
            display.innerHTML += "6";}
          }else{}
      })
      seis.addEventListener("mousedown",function(){
         seis.setAttribute("style","transform:scale(0.95,0.95)")
      })
      seis.addEventListener("mouseout",function(){
         seis.setAttribute("style","transform:scale(1,1)")
      })
      siete.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML ="7";
           }else{
            display.innerHTML += "7";}
          }else {}
      })
      siete.addEventListener("mousedown",function(){
         siete.setAttribute("style","transform:scale(0.95,0.95)")
      })
      siete.addEventListener("mouseout",function(){
         siete.setAttribute("style","transform:scale(1,1)")
      })
      ocho.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML ="8";
           }else{
            display.innerHTML += "8";}
          }else{}
      })
      ocho.addEventListener("mousedown",function(){
         ocho.setAttribute("style","transform:scale(0.95,0.95)")
      })
      ocho.addEventListener("mouseout",function(){
         ocho.setAttribute("style","transform:scale(1,1)")
      })
      nueve.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML ="9";
           }else{
            display.innerHTML += "9";}
          }else{}
      })

      nueve.addEventListener("mousedown",function(){
         nueve.setAttribute("style","transform:scale(0.95,0.95)")
      })
      nueve.addEventListener("mouseout",function(){
         nueve.setAttribute("style","transform:scale(1,1)")
      })

      punto.addEventListener("click",function(){
        if(display.innerHTML.length<=7){
        if(display.innerHTML === "0"){
           display.innerHTML =".";
           }else{
            display.innerHTML += ".";}
          }else{}
      })

      on.addEventListener("click",function(){
        display.innerHTML="0";
      })

      sign.addEventListener("click",function(){
        display.innerHTML=display.innerHTML * -1;
      })

      raiz.addEventListener("click",function(){

      })

      div.addEventListener("click",function(){
        numero1=display.innerHTML;
        operador="/";
        limpiar();
      })

      por.addEventListener("click",function(){
        numero1=display.innerHTML;
        operador="*";
        limpiar();
      })

      resta.addEventListener("click",function(){
        numero1=display.innerHTML;
        operador="-";
        limpiar();

      })
      suma.addEventListener("click",function(){
        numero1=display.innerHTML;
        operador="+";
        limpiar();

      })

      igual.addEventListener("click",function(){

        numero2=display.innerHTML;

        switch (operador) {
          case "+":
            resultado= parseFloat(numero1) + parseFloat(numero2);
            resultado = String(resultado);
            resultado = resultado.substring(0,8);
            display.innerHTML = resultado;
            break;
          default:

          case "-":
          resultado= parseFloat(numero1) - parseFloat(numero2);
          resultado = String(resultado);
          resultado = resultado.substring(0,8);
          display.innerHTML = resultado;
          break;

            case "*":
            resultado= parseFloat(numero1) * parseFloat(numero2);
            resultado = String(resultado);
            resultado = resultado.substring(0,8);
            display.innerHTML = resultado;
            break;

            case "/":
            resultado= parseFloat(numero1) / parseFloat(numero2);
            resultado = String(resultado);
            resultado = resultado.substring(0,8);
            display.innerHTML = resultado;

              break;
            }

      })


      function limpiar() {
      display.innerHTML= "";
      display.focus();
      }

}



}

calculadora.init();
