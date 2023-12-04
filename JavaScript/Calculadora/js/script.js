let operadores;
let resul;


function clicou(num){
    if(operadores == null){
       document.getElementById('display1').innerHTML += num;
      
    }
    
    if(operadores != null){
        document.getElementById('display2').innerHTML += num;
    }

}

function operador(oper){
    operadores = oper;
}

function calcular(){
   let num1 =  document.getElementById('display1').innerHTML;
   let num2 =  document.getElementById('display2').innerHTML;
   
   switch(operadores){
            case '/':
                resul =  num1 / num2;
                document.getElementById('display').innerHTML = resul;
                break;
            case '*':
                 resul =  num1 * num2;
                document.getElementById('display').innerHTML = resul;
                break;
            case '+':
                 resul =  parseFloat(num1) + parseFloat(num2);
                document.getElementById('display').innerHTML = resul;
                break;
            case '-':
                resul = parseFloat(num1) - parseFloat(num2);
                document.getElementById('display').innerHTML = resul;
                break;
            case '**':
                resul = Math.pow(num1 ,num2);
                document.getElementById('display').innerHTML = resul;
                break;
            case '√':
                resul = Math.sqrt(resul);
                document.getElementById('display').innerHTML = resul;
                
        }
   
}



function deletar(){
    document.getElementById('display').innerHTML ='';
    document.getElementById('display1').innerHTML = '';
    document.getElementById('display2').innerHTML = '';
    operadores = null;
}



function cebutton(){    
    let box1 = document.getElementById('display1').innerHTML;
    if(box1 != null){
        document.getElementById('display2').innerHTML = '';
    }else{
        document.getElementById('display1').innerHTML = '';
        document.getElementById('display2').innerHTML = '';
    }
}



