const participantes = [];

const formulario = document.getElementById("formParticipante");

const tabela = document.getElementById("tabelaParticipantes");

const vencedor = document.getElementById("vencedor");

const botaoSortear = document.getElementById("sortear");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    const numero = document.getElementById("numero").value;

    if(nome == "" || numero == ""){

        alert("Preencha todos os campos.");

        return;

    }
    let numeroExiste = false;

    for (let participante of participantes) {

        if (participante.numero == numero) {

            numeroExiste = true;
            break;

        }

    }

    if (numeroExiste) {

        alert("Esse número da rifa já foi cadastrado!");

        return;

    }
    participantes.push({

        nome: nome,

        numero: numero

    });

    atualizarTabela();

    formulario.reset();

});

function atualizarTabela(){

    tabela.innerHTML = "";

    for(let participante of participantes){

        tabela.innerHTML +=

        `
        <tr>

            <td>${participante.nome}</td>

            <td>${participante.numero}</td>

        </tr>
        `;

    }

}

botaoSortear.addEventListener("click", function(){

    if(participantes.length == 0){

        alert("Cadastre participantes primeiro.");

        return;

    }

    const indice = Math.floor(Math.random() * participantes.length);

    const sorteado = participantes[indice];

    vencedor.innerHTML =
        "<strong>" +
        sorteado.nome +
        "</strong> (Número " +
        sorteado.numero +
        ")";

});