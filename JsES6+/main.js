
// ----------------------------CLASSES ---------------------------------------------------------------------------
class List {
    // metodo construtor que é executado na construçao da classe
    constructor() {
        this.datas = [];
    }

    add(data) {
        this.datas.push(data);
        console.log(this.datas);
    }
}
// classe extendida da classe List
class TodoList extends List{
    constructor() {
        // puxa o constructor da classe List
        super();

        this.usuario = 'OtavioMelo';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo TODO');
}

MinhaLista.mostraUsuario();

// -----------------OPERACOES EM ARRAYS --------------------------------------------------------------------------

const array = [1,2,5,6,7,8,4];

// novo modo de percorrer um array (map), 
//item sao os valores e index os indices, 
//percorre um por um
const newArray = array.map(function(item, index) {
    return item+index;
});
console.log(newArray);

// pode ser usado para realizar operaçoes em todo o array
const soma = array.reduce(function (total, next) {
    return total+next; //total-next, total*next, total/next
})
console.log(soma);

// usado para filtrar, retorna true ou false
const filter = array.filter(function(item) {
    return item % 2 === 0; // retornará somente os itens pares
})
console.log(filter);

// usado para encontrar valores especificos, retorna o item caso encontre, e indefinido caso nao encontre
const find = array.find(function(item) {
    return item === 5;
})
console.log(find);

// ------------ARROW FUNCTIONS ---------------------------------------------------------------------------

// memsma funçao anterior, em arrow function
const newArray1 = array.map((item, index) => {
    return item+index;
});

// se possuir somente 1 parametro, pode remover o parenteses
const newArray2 = array.map(item => {
    return item*2;
});

// se a funçao retornar somente uma linha, pode remover o return com as chaves
const newArray3 = array.map(item => item*2);


//definindo uma funçao com o 'const'
const teste1 = () => {
    return 'teste';
}
console.log(teste1());

const teste2 = () => [1,2,3];
console.log(teste2());

//retornando um objeto diretamente apos a arrow
const teste3 = () => ({nome: 'Otavio', sobrenome: 'Melo'});
console.log(teste3());

// --------- DESESTRUTURACAO DE OBJETOS --------------------------------------------------------------------------------------------------------

const usuario = {
    nome: 'Otavio',
    idade: 20,
    endereco: {
        estado: 'MG',
        cidade: 'Lavras'
    },
};

// para acessar os valores
const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome,idade,cidade);

// em uma funcao
function teste({ nome, idade, endereco: { estado } }) {
    console.log(nome, idade, estado)
}
teste(usuario);

//------------ REST -------------------------------------------------------------------------------------------------------------------------

const pessoa = {
    nome: "Otávio",
    sobrenome: "Melo",
    pais: "Brasil"
};

// pega a informaçao nome e armazena na variavel 'nome', e o que sobrar fica na variavel 'resto'
const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const arr = [1,2,3,4,5,6];
// a=1, b=2, c=[3,4,5,6]
const [ a, b, ...c ] = arr;
console.log(a, b);
console.log(c);

// funçao que pega e soma todos os parametros
function soma(...params) {
    return params.reduce((total, next) => total+next);
}
console.log(soma(1, 2, 3, 4, 5));

//------------SPREAD-------------------------------------------------------------------------------------------------

const arr1 = [1,2,3];
const arr2 = [4,5,6];
// concatena todos os valores de 'arr1' com 'arr2'
const arr3 = [...arr1, ...arr2];
console.log(arr3);