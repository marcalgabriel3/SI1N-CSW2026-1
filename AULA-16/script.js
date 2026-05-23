document.writeln('OLÁ MUNDO!!');

// window.alert("Olá Mundo, seu lindo!!!");

document.getElementById('Título').innerHTML = "Olá Mundo JavaScript";

let nomePrompt = window.prompt("Olá Aluno de JavaScript, qual o seu nome?")

document.getElementById('nomeAluno').innerHTML = ("O nome do aluno javascript é : " + nomePrompt)

let resposta = window.confirm("Você gosta de JavaScript ?")

if (resposta) {
    document.getElementById('respostaaluno').innerHTML = "O aluno gosta de JavaScript"
}
else {
    document.getElementById ('respostaaluno').innerHTML = "O aluno não gosta de JavaScript"
}

function exibeNomeAluno() {
    let inputAluno = document.getElementById("inputNomeAluno").value;

    document.getElementById("resposta").innerHTML = "O nome digitado foi: " + inputAluno;
}

function apagaNomeAluno() {
    document.getElementById("inputNomeAluno").value = "";

    document.getElementById("resposta").innerHTML = "";
}