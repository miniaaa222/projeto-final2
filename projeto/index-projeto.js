
// Definições básicas
let continuar = true
let dados = []// Dados do usuário


// Função para cadastro dos novos produtos
function cadastrar() {
	listar()
	
	let perguntar1 = prompt("Insira o Nome do abrigo: ").toLowerCase()
    let perguntar2 = prompt("Insira a cidade do abrigo: ").toLowerCase()
    let perguntar3 = prompt("Insira o endereço do abrigo").toLowerCase()
    let perguntar4 = Number(prompt("Insira a locatação maxima do abrigo  "))
    
    const abrigos = {
        nome: perguntar1,
        cidade: perguntar2,
        endereco: perguntar3,
        lotacao: perguntar4,
    }
    
    dados.push(abrigos)

    console.log(dados)
}

// Função para listar os produtos cadastrados
function listar() {
    let lista =`
              LISTA DE ABRIGOS 
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><
||    INDICE    ||    NOME    ||    CIDADE    ||    ENDEREÇO    ||    LOTAÇÃO    ||
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><\n`
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
	           BUSCA DE ABRIGOS
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><
||    INDICE    ||    NOME    ||    CIDADE    ||    ENDEREÇO    ||    LOTAÇÃO    ||
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><\n`
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

// Função para sair do programa/ fecha-lo
function sair() {
	continuar = false
	console.log("Até logo! Para reiniciar, atualize a aba do navegador ou aperte F5.")
}

// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let perguntar  = "ABRIGOS TEMPORARIOS\n"
		perguntar += "-------------------------\n"
		perguntar += "Escolha uma opção:\n"
		perguntar += "1. Cadastrar Abrigo\n"
		perguntar += "2. lista dos Abrigos\n"
		perguntar += "3. Buscar Abrigos\n"
        perguntar += "4. Sair"

	// Guardar resposta
	let resposta = Number(prompt(perguntar))

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
