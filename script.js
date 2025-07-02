alert('Bem-vindo ao Jogo');

let quantidade = parseInt(prompt('Quantos números você deseja usar para calcular a média?'));
let soma = 0;
let contador = 1;

while (contador <= quantidade) {
  let numero = parseFloat(prompt(`Digite o ${contador}º número:`));
  soma = soma + numero;
  contador++;
}

let media = soma / quantidade;

alert(`A média dos ${quantidade} números digitados é: ${media.toFixed(2)}.`);
