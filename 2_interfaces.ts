/*
Interfaces são um tipo que serve principalmente
para objetos ou classes onde especificamos
os campos ou quais as funções devem estar
presentes nesses objetos.
As interfaces não são compiladas em nada,
só precisamos delas durante o desenvolvimento.
*/

/*
A interface Rect, tem três propriedades:
id (que é readonly, ou seja, não pode ser alterada),
color (que é opcional) e size.
A propriedade size é um objeto com duas propriedades,
width e height, que são números
*/
interface Rect {
	readonly id: string
	color?: string // ? - campo não obrigatório
	size: {
		width: number
		height: number
	}
}

/*
Temos quatro objetos que implementam a interface Rect:
rect1, rect2, rect3 e rect4.
O 1º tem todas as propriedades definidas,
enquanto o 2º não possui a propriedade color.
O 3º e o 4º são criados de formas diferentes,
mas ambos são objetos vazios que implementam a interface Rect.
*/
const rect1: Rect = {
	id: '1',
	size: {
		width: 10,
		height: 50
	},
	color: '#ddd'
}

const rect2: Rect = {
	id: '12345',
	size: {
		width: 50,
		height: 59
	}
}

rect2.color = 'red' // podemos modificar o interior mas não podemos fazer reassign
// rect2.id = '3232' readonly propriety

const rect3 = {} as Rect // podemos indicar o tipo de um objeto vazío
const rect4 = <Rect>{} // alternativa

// =====================

/*
RectWithArea, que extende a interface Rect e adiciona uma nova propriedade,
getArea, que é uma função que retorna o número que representa a área do retangulo
*/
interface RectWithArea extends Rect {
	getArea: () => number // uma função que calcula a área do retangulo
}

/*
rect5 implementa esta interface e define a implementação da função getArea
*/
const rect5: RectWithArea = {
	id: '123',
	size: {
		width: 20,
		height: 20
	},
	getArea(): number {
		return this.size.width * this.size.height
	}
}

// ==================
// muitas das vezes colocamos um I no inicio para indicar que é uma Interface
/*

interface IClock define um objeto com os campos time e setTime.
O campo time é do tipo Date,
enquanto o campo setTime é uma função que recebe um parâmetro do tipo Date
e não retorna nada (void).
*/
interface IClock {
	time: Date
	setTime(date: Date): void
}

/*
Clock que implementa a interface IClock.
Isso significa que a classe Clock é obrigada a ter
os campos e métodos definidos na interface IClock.
*/
class Clock implements IClock {
	time: Date = new Date()

	setTime(date: Date): void {
		this.time = date
	}
}

/*
Styles define um objeto com campos de chave-valor,
onde a chave é do tipo string e o valor é do tipo string tambem.
*/
interface Styles {
	[key: string]: string // tipo do key / value
}

/*
Uma variável chamada css que é do tipo Styles
e atribuimos a ela um objeto com três campos de chave-valor,
seguindo a estrutura definida na interface Styles.
*/
const css: Styles = {
	border: '1px solid black',
	marginTop: '2px',
	borderRadius: '5px'
}