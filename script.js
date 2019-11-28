// Victor Azevedo de Oliveira e Victor Dornelas Honorato
// codigo fonte: https://github.com/soydalto/Ruleta-WEB/

dinheiro = 50;

const roleta = document.querySelector("#roleta");

var lista = [1,2,3,4,5,6,7,8];
let numero;
let cor;
let corEscolhida = '';
let numeroEscolhido = 0;
// roleta.addEventListener("click",girar);



function aposta(corParam){
    numeroEscolhido = document.getElementById('valor_aposta').value;
    corEscolhida = corParam;
    girar();
}


function somar_pontos(p){
	dinheiro += p;
    document.querySelector("#dinheiro").innerHTML = "Dinheiro: R$" + dinheiro + " BRL";
    console.log(dinheiro);
}



function girar(){
    if (dinheiro >= numeroEscolhido) {
        let rand = Math.random()*7200; 
        calcular(rand);
    }
    else {
        alert("Saldo insuficiente");
    }
}



function resultado() {
    if (cor == corEscolhida) {
        somar_pontos(numeroEscolhido*2);
        if (dinheiro >= 400){
            alert ("Parabens, voce ganhou!!!");
        }
    }
    else {
        somar_pontos(numeroEscolhido*-1);
        if (dinheiro == 0){
            alert ("Parabens, voce fracassou miseravelmente!!");
        }
    }
}


function calcular(rand){
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    roleta.style.transform = "rotate("+rand+"deg)";
    setTimeout(()=>{

        switch(true){
            case valor > 0 && valor <= 45:   // 1
                numero = 1;
                cor = 'Preto';
        	    break;
            case valor > 45 && valor <= 90:  // 8
                numero = 8;
                cor = 'Vermelho';
        	    break;
            case valor > 90 && valor <= 135:  //7
                numero = 7;
                cor = 'Preto';
                break; 
            case valor > 135 && valor <= 180:  // 6
                numero = 6;
                cor = 'Vermelho';
                break;
            case valor > 180 && valor <= 225:  // 5
                numero = 5;
                cor = 'Preto';
                break;
            case valor > 225 && valor <= 270:  //4
                numero = 4;
                cor = 'Vermelho';
                break;
            case valor > 270 && valor <= 315:  // 3
                numero = 3;
                cor = 'Preto';
                break;
            case valor > 315 && valor <= 360:  // 2
                numero = 2;
                cor = 'Vermelho';
                break;
        }
        resultado();
    },5000);
}