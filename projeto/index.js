
// Definições básicas
let continuar = true
let dados = []


// Função para cadastro
function cadastrar() {
	let nome = prompt("qual o nome do abrigo?")
	let endereco = prompt("qual seu endereço?")
	let telefone = prompt("qual seu telefone")
	let lotaçao = prompt("qual sua lotaçao ?")
	let cidade = prompt("qual sua cidade ?")
	let dado = {nome,endereco,telefone,lotaçao,cidade}
	dados.push(dado)
}

// Função para listar
function listar() {
	let lista =`
	lista dos abrigos 
-----------------------------------------------------------------------------------
||    Iindice   ||    nome    ||    cidade    ||    endereço    ||    lotaçâo      ||
-----------------------------------------------------------------------------------\n`
for(let objeto of dados){
let listaObjeto =`|| 	  ${dados.indexOf(objeto)}  	 ||  	 ${objeto.nome}    ||  	 ${objeto.cidade}  	 ||  	 ${objeto.endereco}  	 ||    ${objeto.lotacao}  	  ||\n`             
lista = lista + listaObjeto
}
console.log(lista)

}

// Função para buscar um produto especifico
function buscar() {
let abrigoEscolhido = prompt("Insira o nome do abrigo:").toLowerCase()
let lista =`
	busca de abrigo
 -----------------------------------------------------------------------------------
 ||    indice    ||    nome    ||    cidade   ||    endereço    ||    lotaçâo   ||
 -----------------------------------------------------------------------------------\n`
for(let objeto of dados){
let buscaObjeto =`||  	 ${dados.indexOf(objeto)}  	 ||  	 ${objeto.nome}  	 || 	  ${objeto.cidade}    || 	  ${objeto.endereco}    ||	   ${objeto.lotacao} 	   ||\n`             
for(let propriedade in objeto){
  if (objeto[propriedade] === abrigoEscolhido) {
	  lista += buscaObjeto
	  break 
  }
}

}

console.log(lista)

}

let novoAbrigo = {
 nomeA,
 endereco,
 telefone,
 capacidade,
 cidade,

};

dados.push(novoAbrigo);


// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar abrigo\n"
		pergunta += "2. Listar abrigos\n"
		pergunta += "3. Procurar abrigo\n"
		pergunta += "4. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 4:
			sair()
			break
	}
}
