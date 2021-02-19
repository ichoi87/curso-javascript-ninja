/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/

/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
function Person(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  
  this.getFullName = () => {
    return `${this.name} ${this.lastname}`;
  };
  this.getAge = () => {
    return this.age;
  };
  this.addAge = () => {
    this.age += arguments[0];
  }
}

/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
console.log( 'Novas pessoas criadas à partir de Person:' );
var felipe = new Person('Felipe', 'Choi', 35);
var felip2e = new Person('Felipe2', 'Kim', 30);
var felipe3 = new Person('Felipe3', 'Lee', 25);
console.log(felipe);
console.log(felipe2);
console.log(felipe3);

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:' );
console.log(felipe.getFullName());
console.log(felipe2.getFullName());
console.log(felipe3.getFullName());

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
console.log(`${felipe.getFullName()} tem ${felipe.getAge()} anos.`);
console.log(`${felipe2.getFullName()} tem ${felipe2.getAge()} anos.`);
console.log(`${felipe3.getFullName()} tem ${felipe3.getAge()} anos.`);

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );
felpe.addAge(1);
console.log(`${felipe.getFullNmae()} agora tem ${felipe.getAge()} anos.`);
console.log(`${felipe2.getFullNmae()} agora tem ${felipe2.getAge()} anos.`);
console.log(`${felipe3.getFullNmae()} agora tem ${felipe3.getAge()} anos.`);
