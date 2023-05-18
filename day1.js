// Você pode criar uma classe chamada ListaDeCompras para resolver este desafio.
//
// Comece definindo a classe ListaDeCompras e inicialize duas listas vazias, itens e quantidades, para armazenar os nomes dos produtos e as quantidades, respectivamente;
//
// Crie o método adicionar_item, que recebe como argumentos o nome do produto e a quantidade desejada. Dentro desse método, adicione o nome do produto à lista itens e a quantidade à lista quantidades;
//
// Crie o método remover_item, que recebe como argumento o nome do produto a ser removido. Dentro desse método, encontre o índice do produto na lista items e remova o produto tanto da lista itens quanto da lista quantidades;
//
// Crie o método listar_itens, que percorre a lista itens e a lista quantidades simultaneamente e exibe o nome do produto e a quantidade em um formato legível;
//
// Teste a sua implementação criando uma instância da classe ListaDeCompras, adicionando alguns itens, removendo um item e listando todos os itens restantes;
//
// Como uma tarefa extra, você pode implementar algumas validações extras, como verificar se o nome do produto está em formato válido e se a quantidade é um número inteiro positivo.

class ListaCompras{
    constructor() {
     this.itens = [];
     this.quantidades = [];
    }

    adicionar_item(nome,qty){
        this.itens.push(nome)
        this.quantidades.push(qty)
    }

    remover_item(nome_produto) {
        const index = this.itens.indexOf(nome_produto);
        if (index !== -1) {
            this.itens.splice(index, 1);
            this.quantidades.splice(index, 1);
        }
    }

    listar_itens(){
        for (let i = 0; i < this.itens.length; i++) {
            const item = this.itens[i];
            const quantidade = this.quantidades[i];
            console.log(`Item: ${item}, Quantidade: ${quantidade}`);
        }
    }
}
const p1 = new ListaCompras();
p1.adicionar_item("maçã",2)
p1.adicionar_item("abcate",1)
p1.adicionar_item("uva",1)
p1.remover_item("uva")
p1.listar_itens();
console.log(p1)

