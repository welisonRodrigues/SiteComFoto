
    
    
///////////////////////////////////////////////////////////////////    
    var a = window.document.getElementById('area')
      
  
    a.addEventListener('click', clicar)
    a.addEventListener('mouseenter', entrou)
    a.addEventListener('mouseout', saiu)
   
        function clicar(){
              a.innerText = 'CLICOU!'
              a.style.background = 'blue'
   
        }
        
        function entrou(){
              a.innerText = 'ENTROU!'
              a.style.background = 'yellow'
              a.style.color = 'black'
   
        }
        
        function saiu(){
              a.innerText = "SAIU!"
              a.style.background = 'violet'
   
        }

///////////////////////////////////////////////////////////////////     
 function mudaNome(){
      var nome = window.document.getElementById("txt")
    
      var nome2 = String(nome.value)
  
      console.log(nome2)
      
      document.title = nome2
      
      window.alert("Título alterado...")

 }

///////////////////////////////////////////////////////////////////
function calcular(){

    var txtn = window.document.getElementById("txtn1")
    var txtn2 = window.document.getElementById("txtn2")

    var n1 = Number(txtn.value)
    var n2 = Number(txtn2.value)

    var soma = n1 + n2

    var res = window.document.getElementById("res")
    res.innerText +=  ` ${soma}, Entendeu ou não entendeu!!`
    

};

function resposta(){

      let jogaMal = window.document.getElementById("jogamal");
      jogaMal.innerHTML = "Já sabia kkkkk"

}





    
     
               
