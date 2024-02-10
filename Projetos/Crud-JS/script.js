//  VETOR PESSOAS
let vetor = [];

// MÉDIA


// CADASTRO

function acao() {
  // OBTER NOME E CIDADE
  let nome = document.querySelector("#nome");
  let nota1 = document.querySelector("#nota1");
  let nota2 = document.querySelector("#nota2");

  let media = (nota1.value + nota2.value) / 2;
  console.log(media);

  // VALIDAÇÃO
  if (nome.value == "") {
    alert("Informe um nome!");
  } else if (nota1.value == "") {
    alert("Informe um número!");
  } else if (nota2.value == "") {
    alert("Informe um número!");
  } else {

    // CRIAR OBJEETO JSON
    let pessoa = {
      nome: nome.value,
      nota1: nota1.value,
      nota2: nota2.value,
    };

    // LIMPAR CAMPOS
    nome.value = "";
    nota1.value = "";
    nota2.value = "";

    // CURSOR
    nome.focus();

    // ADICIONAR O OBJETO NO VETOR
    vetor.push(pessoa);

    selecionar();
  }
}

//   FUNÇÃO REMOVER
function remover(index) {
  // REMOVER PESSOAS DO VETOR
  vetor.splice(index, 1);
  selecionar();
}

function selecionar() {
  // OBTER ELEMENTO TABELA
  let tabela = document.querySelector("#tabela");

  //   LIMPAR TABELA
  tabela.innerHTML = "";

  //   LAÇOS DE REPETIÇÃO
  for (let index = 0; index < vetor.length; index++) {
    // CRIAR LINHA DA TABELA  (tr)
    let linha = tabela.insertRow(-1);

    //   CRIAR COLUNAS
    let colunaNome = linha.insertCell(0);
    let colunaNota1 = linha.insertCell(1);
    let colunaNota2 = linha.insertCell(2);
    let colunaRemover = linha.insertCell(3);

    //   ADICIONAR OS VALORES NAS COLUNAS
    colunaNome.innerText = vetor[index].nome;
    colunaNota1.innerText = vetor[index].nota1;
    colunaNota2.innerText = vetor[index].nota2;
    colunaRemover.innerHTML = `<button class='btn btn-danger' onclick='remover(${index})'>Remover</button>`;
  }
}