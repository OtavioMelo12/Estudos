"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ------------------------------------------------CLASSES ---------------------------------------------------------------------------
var List =
/*#__PURE__*/
function () {
  // metodo construtor que é executado na construçao da classe
  function List() {
    _classCallCheck(this, List);

    this.datas = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.datas.push(data);
      console.log(this.datas);
    }
  }]);

  return List;
}(); // classe extendida da classe List


var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    // puxa o constructor da classe List
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'OtavioMelo';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo TODO');
};

MinhaLista.mostraUsuario(); // -------------------------------------OPERACOES EM ARRAYS --------------------------------------------------------------------------

var array = [1, 2, 5, 6, 7, 8, 4]; // novo modo de percorrer um array (map), 
//item sao os valores e index os indices, 
//percorre um por um

var newArray = array.map(function (item, index) {
  return item + index;
});
console.log(newArray); // pode ser usado para realizar operaçoes em todo o array

var soma = array.reduce(function (total, next) {
  return total + next; //total-next, total*next, total/next
});
console.log(soma); // usado para filtrar, retorna true ou false

var filter = array.filter(function (item) {
  return item % 2 === 0; // retornará somente os itens pares
});
console.log(filter); // usado para encontrar valores especificos, retorna o item caso encontre, e indefinido caso nao encontre

var find = array.find(function (item) {
  return item === 5;
});
console.log(find); // ---------------------------------------ARROW FUNCTIONS ---------------------------------------------------------------------------
// memsma funçao anterior, em arrow function

var newArray1 = array.map(function (item, index) {
  return item + index;
}); // se possuir somente 1 parametro, pode remover o parenteses

var newArray2 = array.map(function (item) {
  return item * 2;
}); // se a funçao retornar somente uma linha, pode remover o return com as chaves

var newArray3 = array.map(function (item) {
  return item * 2;
}); //definindo uma funçao com o 'const'

var teste1 = function teste1() {
  return 'teste';
};

console.log(teste1());

var teste2 = function teste2() {
  return [1, 2, 3];
};

console.log(teste2()); //retornando um objeto diretamente apos a arrow

var teste3 = function teste3() {
  return {
    nome: 'Otavio',
    sobrenome: 'Melo'
  };
};

console.log(teste3()); // ------------------------ DESESTRUTURACAO DE OBJETOS --------------------------------------------------------------------------------------------------------

var usuario = {
  nome: 'Otavio',
  idade: 20,
  endereco: {
    estado: 'MG',
    cidade: 'Lavras'
  }
}; // para acessar os valores

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade); // em uma funcao

function teste(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      estado = _ref.endereco.estado;
  console.log(nome, idade, estado);
}

teste(usuario);
