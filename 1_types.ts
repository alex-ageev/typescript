/*
TypeScript é uma linguagem de programação que foi desenvolvida pela Microsoft.

Ele é baseado em JS e adiciona tipos ao código, permitindo que os developers
declarem variáveis e funções com tipos específicos.
Isso permite que o compilador do TypeScript verifique se
o código está sendo usado de maneira correta e
garante que o código tenha menos erros.

*/
const isFetching: boolean = true;
const isLoading: boolean = false;
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;
const message: string = 'Hello';
const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 7]; // generic type
const words: string[] = ['Hello', 'World'];

/*
O tipo "tuple" é uma forma de criar um array com elementos de diferentes tipos.
Por exemplo, array "contact" tem dois elementos, um string e um number.
*/
const contact: [string, number] = ['José', 987654321];

/*
O tipo "any" é usado para indicar que uma variável pode ter qualquer tipo.
Isso pode ser útil em casos em que o tipo de uma variável é desconhecido
ou se desejamos suprimir as verificações de tipo.
No entanto, o uso excessivo de "any" pode diminuir a utilidade do ts,
pois a type checking é uma das principais vantagens desse sistema de tipos.
*/
let variable: any = 42;
variable = 'uma string';
variable = [];

/*
O tipo "void" serve para indicar que uma função não retorna nenhum valor.
A função "myName" simplesmente imprime o nome dado como argumento, mas não retorna nada.
*/
function myName(name: string): void {
  console.log(name);
}
myName('Alex');

/*
O tipo "never" é um novo tipo em ts que é usado para indicar que
uma função nunca retornará um valor.
Isso é útil para funções que sempre lançam um erro ou
entram em um loop infinito.
*/
function throwError(message: string): never { throw new Error(message); }
function infinite(): never { while (true) {} }

/*
O tipo "Login" é um alias para o tipo "string"
é usado para definir a constante "login" como uma string.
*/
type Login = string;
const login: Login = 'admin';

// podemos indicar tipos potenciais
/*
O tipo "ID" é um tipo composto que pode ser usado para tipos "string" ou "number",
e é usado para definir as constantes "id1" e "id2" como
um número e uma string, respectivamente.
*/
type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

/*
O tipo "SomeType" é um tipo composto que pode ser usado
para tipos "string", "null" ou "undefined".
*/
type SomeType = string | null | undefined;