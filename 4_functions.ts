/*
Uma diferença importante entre as funções do TypeScript e as do JavaScript é que,
no TypeScript, é possível declarar o tipo de dados dos parâmetros de
uma função e o tipo de retorno da função.
Isso permite que o compilador verifique se a função está sendo usada corretamente
e garante que o código seja mais confiável.

Por exemplo, aqui está como se declara uma função no TypeScript que recebe dois números
como parâmetros e retorna a soma desses números:
*/
function sum(a: number, b: number): number {
	return a + b
}

/*
A função toUpperCase recebe um parâmetro, str, que é uma string.
A função remove qualquer espaço em branco no início e no final da string e
retorna a string com todas as letras em maiúsculas.
*/
function toUpperCase(str: string): string {
	return str.trim().toUpperCase()
}

interface MyPosition {
	x: number | undefined
	y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
	default: string // por exemplo
}

function position(): MyPosition // caso não tem argumentos usa a interface
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
	if (!a && !b) { // caso não passamos os parametros
		return { x: undefined, y: undefined }
	}

	if (a && !b) { // temos que retornar interface MyPositionWithDefault
		return { x: a, y: undefined, default: a.toString() }
	}

	return { x: a, y: b }
}
/*
A função position recebe dois parâmetros opcionais, a e b.
Se ambos os parâmetros forem omitidos, a função retorna um objeto com
as propriedades x e y definidas como undefined.
Se apenas o parâmetro a é fornecido,
a função retorna um objeto com as propriedades x e y definidas como
o valor de a, e uma propriedade adicional chamada default
que contém o valor de a como uma string.
Se ambos os parâmetros forem fornecidos, a função retorna um objeto
com as propriedades x e y definidas
como os valores de a e b, respectivamente.
*/
console.log('Vázia:', position());
console.log('1 parametro:', position(42));
console.log('2 parametros:', position(10, 15));

/* Podemos encontrar este tipo de overloading em várias bibliotecas, por exemplo
lodash ou angular (ts core) */