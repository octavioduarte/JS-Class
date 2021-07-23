> 01) Diga o nome de cada um dos operadores abaixo: 

 '>'  --> (Faz a comparação se o valor e maior do que outro) 
 '<'  --> (Faz a comparação se o valor e menor de que outro)
 '!'  --> (nao) nega o valor associado a ele.
 '>=' --> (Compara o valor se é maior ou igual ao outro)
 '<=' --> (compara se o valor é menor ou igual ao outro) 
 '&&' --> (E) Analisa multiplas condições e retorna "true" se todas forem verdadeiras
 '||' --> (OU) Analisa multiplas condições e retorna "false" se todas forem falsas


---------------------------------------------------------------------------------------------------------------------------

> 02) Qual a diferença entre '==' e '===' ?

R: ((==Analisa valores e ignora a tipagem), (===Analisa os valores e tipagem))


---------------------------------------------------------------------------------------------------------------------------

> 03) O que é e para que serve um array ? 

R: (O array permite agrupar dados em uma unica variavel)


---------------------------------------------------------------------------------------------------------------------------

> 04) Escreva um for que faz uma contagem regressiva de 100 até 27 ? 

R: for (var i = 100; i <= 27; i--){
    console.log(i)
}


---------------------------------------------------------------------------------------------------------------------------

> 05) Escreva o resultado das operações abaixo :  

~~~javascript
 true && !false                 // true
 (3 * 9) > 31 || 10 - 3 !== 7   // false
 !!true                         // true
~~~


---------------------------------------------------------------------------------------------------------------------------

> 06) Qual o valor da variávez 'size' ?  

~~~javascript
 const list = ["O", "Palmeiras", "não", "tem", "mundial"]
 const size = list.length
 // valor 5
~~~


---------------------------------------------------------------------------------------------------------------------------

> 07) Qual a diferença entre variável e constante ? Descreva um cenário onde cada uma é mais apropriada do que a outra .   

R: (varivel sao valores que pode ser mudados exemplo:
var idade = 20
var dia = 22
var mes = "julho"
constantes sao valores que nao serao modificados exemplo:
const nome = "Gabriel"
const sobreNome = "Oliveira"
const cpf = "000.000.000-00"
)


---------------------------------------------------------------------------------------------------------------------------

> 08) O que cada um desses métodos faz em um array ? 

~~~javascript 

push()    // --> Adiciona um novo elemento no ultimo indice do Array.
pop()     // --> Deleta o ultimo valor do Array.
unshift() // --> Adiciona um novo elemento no começo do Array.
slice()   // --> Retorna uma copia do array de acordo com os indices passados.
shift()   // --> Deleta o primeiro valor do Array

~~~
