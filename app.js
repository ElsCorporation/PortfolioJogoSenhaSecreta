let senhaAleatoria = [];
let contadorCriarSenha=0;
let senhasDescobertas=0;
let controladorTentativasSenha;
let faseSenha=0;
let mensagemSenhasDescobertas = [];
let tentativa=1;
let dicaNumero;
let mensagemTentativa;
const teste = "estamos testando o checkout";
const teste2 = "rafael marques esteve aqui HEHEHE";


function criarSenha (limiteSenha) {

    mensagemSenhasDescobertas.length = limiteSenha;
    mensagemSenhasDescobertas.fill (' [ * ] ');
    
    while ( contadorCriarSenha < limiteSenha) {

        senhaAleatoria [contadorCriarSenha] = parseInt(Math.random()*9+1);
        contadorCriarSenha++;
        
    }
    
}

function jogoDaSenha (){
    console.log("Entrei no jogoDaSenha()");
    
    while (senhasDescobertas < senhaAleatoria.length) {
        
        controladorTentativasSenha = prompt(`SENHA: ${mensagemSenhasDescobertas} \n Digite um número de 1 a 9, para a senha ${faseSenha+1}: `);
        

        if (controladorTentativasSenha == senhaAleatoria[faseSenha]) {
            alert('Você acertou');
            mensagemSenhasDescobertas[faseSenha]= controladorTentativasSenha;
            faseSenha++;
            senhasDescobertas++;
            
        } else 

            if (controladorTentativasSenha != senhaAleatoria[faseSenha]){

            dicaNumero = controladorTentativasSenha > senhaAleatoria[faseSenha] ? `O numero é menor que ${controladorTentativasSenha}` : `O numero é maior que ${controladorTentativasSenha}`;
            alert(dicaNumero);
            tentativa++;
            
            }
            
        }
    mensagemTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    alert (`Você ganhou com ${tentativa} ${mensagemTentativa}. \n Senha: ${mensagemSenhasDescobertas}`);
}

criarSenha(2);
jogoDaSenha();
console.log(senhaAleatoria);