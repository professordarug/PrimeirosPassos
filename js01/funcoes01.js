//FUNÇÕES

// Funções / Tarefas / Rotinas

// Algo acontece ou pode ser automatizada para ter a chamada
// parametro é o que passamos para dentro da função
// toda função tem uma ação
// toda função tem retorno

// Estas ações são executadas assim que são chamadas ou em decorrência de algum Evento

function sum(number1, number2) {
    return number1 + number2;
}

//console.log(sum(4, 5));

const paragrafo = document.createElement('p');
paragrafo.innerText = 'O resultado é ' + sum(45, 5);
document.body.appendChild(paragrafo);
