const arrayNumbers: Array<number> = [1, 2, 3, 4, 5]
const arrayStrings: Array<string> = ['Abc', 'Xpto']

/*
Criamos duas constantes, "arrayNumbers" e "arrayStrings",
e define uma função "reverse"
que recebe um array genérico e retorna o mesmo array,
as com os elementos em ordem inversa.
*/

function reverse<T>(array: T[]): T[] { // arrays podem ser de vários tipo
	return array.reverse()
}

reverse(arrayNumbers)
reverse(arrayStrings)

