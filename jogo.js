var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search
nivel = nivel.replace('?', '')
var criaMosquitotempo = 1500

if (nivel === 'normal') {

	criaMosquitoTempo = 1500

}else if (nivel === 'dificil') {

	criaMosquitoTempo = 1000

}else if (nivel === 'chucknorris') {

	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}else{

	document.getElementById('cronometro').innerHTML = tempo
}
}, 1000)

function posicaoRandomica(){

	//remover o mosquito anterior (caso existe)
	if (document.getElementById('mosquito')){
	document.getElementById('mosquito').remove()

	if (vidas>3) {
		window.location.href = 'fim_de_jogo.html'
	}else{

	document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
	vidas++
}
}
var posicaox = Math.floor(Math.random() * largura) - 90
var posicaoy = Math.floor(Math.random() * altura) - 90

posicaox = posicaox < 0 ? 0 : posicaox
posicaoy = posicaoy<0 ? 0 : posicaoy


console.log(posicaox, posicaoy)
//criar o elemento html

var mosquito = document.createElement('img')

mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaox + 'px'
mosquito.style.top = posicaoy + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
	this.remove()
}

document.body.appendChild(mosquito)

console.log(tamanhoAleatorio())
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	switch(classe){
		case 0 :
		return 'mosquito1'

		case 1 :
		return 'mosquito2'

		case 2:
		return 'mosquito3'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0 :
		return 'ladoA'

		case 1 :
		return 'ladoB'
	}



}