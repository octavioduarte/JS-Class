> 01) Diga o nome de cada um dos operadores abaixo: 

 '>'  --> (valor maior) 
 '<'  --> (valor menor)
 '!'  --> (nao) nega o valor associado a ele.
 '>=' --> (maior ou igual)
 '<=' --> (menor ou igual) 
 '&&' --> (diferente) true somente quando todos os valores sao verdadeiros caso tenha algum valor negativo é false.
 '||' --> (igual)todos os valores tem que ser falso para dar false, tendo apenas um valor verdadeiro e true.


---------------------------------------------------------------------------------------------------------------------------

> 02) Qual a diferença entre '==' e '===' ?

R: ((==ignora a semantica), (===ele faz a priorização da semantica))


---------------------------------------------------------------------------------------------------------------------------

> 03) O que é e para que serve um array ? 

R: (o array ele pode armazenar valores em forma de lista)


---------------------------------------------------------------------------------------------------------------------------

> 04) Escreva um for que faz uma contagem regressiva de 100 até 27 ? 

R: ()


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
 // 1, 2, 3, 4, 5 
~~~


---------------------------------------------------------------------------------------------------------------------------

> 07) Qual a diferença entre variável e constante ? Descreva um cenário onde cada uma é mais apropriada do que a outra .   

R: (varivel sao valores que pode ser mudados exemplo:
var idade = 20
var dia = 22
var mes = "julho"
constantes sao valores que nao serao modificados exemplo:
const nome = Gabriel
const sobreNome = oliveira
const cpf = 000.000.000-00
)


---------------------------------------------------------------------------------------------------------------------------

> 08) O que cada um desses métodos faz em um array ? 

~~~javascript 

push()    // --> sobe um valor para o final da variavel
pop()     // --> sobe um valor para o começo da variavel
unshift() // --> apresenta os valores pelo indice informado 
slice()   // --> deleta o ultimo valor do indice
shift()   // --> deleta o primeiro valor do indice 

~~~
