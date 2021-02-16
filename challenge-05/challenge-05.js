/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArrray(arr) { return arr; };

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
getArray()[2];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function printArray(arr, ind) {
  return arr[ind];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var types = [a, b, c, d, e];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(var i = 0; types.length > i; i++) {
  return types[i];
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function getBook(name) {
  var books = {
    'livro1': {
      'quantidadePaginas': 1,
      'autor': 'autor1',
      'editora': 'editora1'
    },
    'livro2': {
      'quantidadePaginas': 2,
      'autor': 'autor2',
      'editora': 'editora2'
    },
    'livro3': {
      'quantidadePaginas': 3,
      'autor': 'autor3',
      'editora': 'editora3'
    },
  }
  if(!name) {
    return books;
  }else {
    return books.name; 
  }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
getBook();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'livro1';
var pages = getBook(bookName).quantidadePaginas;
console.log('O livro ' + bookName + ' tem ' + pages + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName = 'livro1';
var autor = getBook(bookName).autor;
console.log('O autor do livro ' + bookName + ' é ' + autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName = 'livro1';
var editora = getBook(bookName).editora;
console.log('O livro ' + bookName + ' foi publicado pela editora ' + editora + '.');
