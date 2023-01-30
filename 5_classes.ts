/*
A programação orientada a objetos (OOP) é uma abordagem de desenvolvimento
de software que se baseia no conceito de "objetos",
que são entidades que possuem estado e comportamento.

No contexto do TypeScript, as classes são uma ferramenta
para implementar o paradigma de programação orientada a objetos.

As vantagens de usar classes em TypeScript incluem:

1. Reutilização de código:
as classes podem ser reutilizadas em vários lugares do seu código,
o que ajuda a evitar a duplicação de código e aumenta a eficiência
do seu desenvolvimento.

2. Organização do código:
as classes permitem organizar o código de maneira mais clara e estruturada,
tornando-o mais fácil de entender e manter.

3. Encapsulamento:
as classes permitem esconder a implementação detalhada de um objeto
e expor apenas suas funções públicas, o que ajuda a proteger o estado
interno do objeto e a controlar o acesso a ele.

4. Herança:
as classes permitem criar hierarquias de classes,
em que uma classe pode herdar atributos e comportamentos
de outra classe, o que permite a criação de classes
mais especializadas com base em classes mais genéricas.
*/

class Typescript { // igual ao ES6 mas indicamos o tipo de variável
	version: string

	constructor(version: string) {
		this.version = version
	}

	info(name: string) {
		return `[${name}]: TS version is ${this.version}`
	}
	/*
		Esse tipo de concatenação de strings é conhecido como interpolação de strings.
		É uma forma de incorporar variáveis ​​em uma string,
		permitindo que o valor dessas variáveis ​​seja incluído
		no resultado da string.
		A sintaxe para a interpolção de strings é geralmente ${variavel}.
	*/
}

/*
Esta class representa um carro. Tem duas propriedades: modelo e rodas (por defeito 4).

A palavra-chave readonly é usada para indicar que uma propriedade é somente leitura,
ou seja, que ela não pode ser alterada depois de ser definida.

As propriedades model e wheels são readonly,
o que significa que elas só podem ser definidas no construtor da classe.
*/
class Car1 {
	readonly model: string
	readonly wheels: number = 4

	constructor(model: string) {
		this.model = model // só podemos definir dentro do construtor
	}
}

/*
Outra versão é uma forma mais elegante de escrever a classe,
usando a sintaxe de parâmetro de construtor para definir
as propriedades model e wheels ao mesmo tempo que declaramos seus tipos.
Isso é semelhante à declaração das propriedades model e wheels fora do construtor,
mas é mais conciso e fácil de ler.
*/
class Car2 {
	readonly numberOfWheels: number = 4
	constructor(readonly model: string) { }
}

// exemplos de modificadores
class Animal {
	/*
		Acedida dentro da própria classe
		ou em classes que herdam dela.
	*/
	protected voice: string = ''

	#idade: string = ''

	public color: string = 'black' // acedida a partir de qualquer código.

	constructor() {
		this.go() // sem problema
	}

	private go() {
		console.log('go go go')
	}
}

/*
método público setVoice que permite-nos alterar o valor da voice.
No entanto, como a propriedade voice é protegida,
só podemos acede-la a partir da classe Cat.

Quando criamos uma instancia da classe Cat e chamamos o método set,
conseguimos alterar o valor da voice.

Se tentarmos aceder a propriedade voice diretamente,
não conseguiremos, pois ela é protegida.
A propriedade color, por outro lado, é pública e podemos acede-la livremente.
*/
class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
	}

	public getVoice(): string {
		return this.voice;
	}
	// não podemos envocar o método go()
}

const cat = new Cat();
cat.setVoice('miaauu');
console.log(cat.color);
console.log(cat.getVoice);


/*
Uma classe abstrata é uma classe que não pode ser instanciada diretamente,
mas que pode ser herdada por outras classes.
As classes que herdam de uma classe abstrata são obrigadas
a implementar os métodos abstratos da classe pai.

A classe Component tem dois métodos abstratos: render e info.
Isso significa que as classes que herdam de Component
são obrigadas a implementar esses métodos.
A classe AppComponent herda de Component
e implementa os métodos render e info, fornecendo sua própria implementação.
*/

abstract class Component {
	// descrevemos os métodos que devem ser realizados nas classes que o herdam
	abstract render(): void
	abstract info(): string
}

class AppComponent extends Component {
	render(): void {
		console.log('render')
	}

	info(): string {
		return 'info';
	}
}