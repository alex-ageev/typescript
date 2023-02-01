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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[".concat(name, "]: TS version is ").concat(this.version);
    };
    return Typescript;
}());
/*
Esta class representa um carro. Tem duas propriedades: modelo e rodas (por defeito 4).

A palavra-chave readonly é usada para indicar que uma propriedade é somente leitura,
ou seja, que ela não pode ser alterada depois de ser definida.

As propriedades model e wheels são readonly,
o que significa que elas só podem ser definidas no construtor da classe.
*/
var Car1 = /** @class */ (function () {
    // primeira função que é envocada quando instanciamos a classe
    function Car1(model) {
        // só pode ser acedida dentro da propria classe
        this.wheels = 4;
        this.model = model; // só podemos definir dentro do construtor
    }
    // get para aceder ao Model
    Car1.prototype.getModel = function () {
        return this.model;
    };
    // set para modificar o Model
    Car1.prototype.setModel = function (model) {
        if (model != "Ferrari") {
            this.model = model;
        }
    };
    Car1.prototype.buzinar = function () {
        return "popo";
    };
    Car1.prototype.buzinar2 = function () {
        return "pipi";
    };
    Car1.prototype.info = function () {
        return "Este carro tem modelo ".concat(this.model, " e tem ").concat(this.wheels, " rodas.");
    };
    return Car1;
}());
var carro = new Car1("BMW");
console.log(carro.getModel());
carro.setModel("Ferrari");
console.log(carro.getModel());
carro.model = "Ferrari";
// carro.wheels = 50;
console.log(carro.getModel());
//carro.buzinar(); // metodo privado não é possivel aceder de fora!!
console.log(carro.info());
/*
Outra versão é uma forma mais elegante de escrever a classe,
usando a sintaxe de parâmetro de construtor para definir
as propriedades model e wheels ao mesmo tempo que declaramos seus tipos.
Isso é semelhante à declaração das propriedades model e wheels fora do construtor,
mas é mais conciso e fácil de ler.
*/
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car2;
}());
// exemplos de modificadores
var Animal = /** @class */ (function () {
    function Animal() {
        /*
            Acedida dentro da própria classe
            ou em classes que herdam dela.
        */
        this.voice = '';
        this.idade = '';
        this.color = 'black'; // acedida a partir de qualquer código.
        this.go(); // sem problema
    }
    Animal.prototype.go = function () {
        console.log('go go go');
    };
    return Animal;
}());
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
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    Cat.prototype.getVoice = function () {
        return this.voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
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
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('render');
    };
    AppComponent.prototype.info = function () {
        return 'info';
    };
    return AppComponent;
}(Component));
