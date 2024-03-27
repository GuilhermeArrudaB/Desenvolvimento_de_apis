let idGerador = 2;
let listaProdutos = [
    {
        id:1,
        nome: 'arroz',
        categoria: 'alimento',
        preco: 5.80
    },
    {
        id:2,
        nome:'leite',
        categoria:'bebida',
        preco: 4.25
    }
];

function listar(){
    return listaProdutos;
}

function inserir(produto){
    produto.id = idGerador++
    listaProdutos.push(produto);
}

function main(){
    console.log(listar());
}

function buscarPorId(id){
    for (let produto of listaProdutos){
        if(produto.id === id){
            return produto;
        }
    }
}

inserir({
    nome: 'feijão',
    categoria: 'alimento',
    preco: 9.20
})

console.log(listar());
console.log(buscarPorId(5));
console.log(buscarPorId(2));





