//----------------------------TIPOS BÁSICOS------------------------------------//

var mensagem = "Hello World"; //string
let numero = 42; //number
const disponivel = true; //boolean

//mensagem = 1; //gera um erro de tipagem
mensagem.toUpperCase();
numero.toFixed();

//-------------------------------ANY-------------------------------------------//

//Tipo Any
let retorno; //ou let retorno: any
let vazio = null;
let naoDefinido = undefined;

//Alteração de valores em variável do tipo any
retorno = true;
retorno = 21;
retorno.toFixed();
retorno = "teste";
retorno.toUpperCase();

//-------------------------------UNKNOWN---------------------------------------//

//Tipo Unknown
let desconhecido: unknown;

//unknown necessita de uma validação de tipo para sua manipulação
if (typeof desconhecido === "string") {
  desconhecido.toUpperCase();
}

//-------------------------------ARRAYS----------------------------------------//

//Arrays
let frutas: readonly string[] = ["Uva", "Maca", "Melao"];
let numerosPares = [2, 4, 6, 8];
let numerosImpares = [1, 3, 5, 7, 9];
let listaVazia = [];
//let combinadoUm: number[] = [...frutas, ...numerosPares]; //Erro por realizar spread em arrays de tipos diferentes
let numeros: number[] = [...numerosImpares, ...numerosPares];
//resultado: [1,3,5,7,9,2,4,6,8]

//frutas.push('laranja'); //Erro readonly
//numerosPares.push('teste'); //Erro de tipo inválido
listaVazia.push(42);
listaVazia.push("teste");

//-------------------------------TUPLAS----------------------------------------//

let produtos: [string, number, boolean] = ["Mouse", 40, true];
console.log(produtos);

//Desestruturação
let [produto, preco, vendido] = produtos;
console.log(produto);
console.log(preco);
console.log(vendido);
