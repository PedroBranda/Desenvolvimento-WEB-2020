//Variável local para imagem.
let myImg = document.querySelector('img');

/*
Função para mudar a imagem ao clicar.
A variável local mySrc recebe o caminho da imagem atualmente
mostrada no index, se a imagem atual for o logo do firefox
quando a imagem receber um clique o atributo da variável local
myImg é atualizado com uma nova fonte de imagem caso contrário
a é atribuida a imagem do logo do firefox novamente a fonte de
imagem.
*/
myImg.onclick = function () {
  let mySrc = myImg.getAttribute('src');
  if (mySrc === 'images/logo.png') {
    myImg.setAttribute('src', 'images/bino.png');
  } else {
    myImg.setAttribute('src', 'images/logo.png');
  }
}

//Variáveis locais para botão e cabeçalho.
let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

/*
Função para definir o nome do usuário.
A variável local myName recebe o nome digitado no prompt que aparece
na tela do usuário, enquanto a variável myName for nula o prompt para
digitar o nome será mostrado.
Quando o nome for digitado, o mesmo é armazenado no armazenamento
local e então o conteúdo do cabeçalho h1 é modificado utilizando
a variável myName.
*/
function defUserName() {
  let myName = prompt('Por favor, digite seu nome.');
  while (myName == null) {
    myName = prompt('Por favor, digite sem nome.');
  }
  localStorage.setItem('name', myName);
  myHeader.textContent = 'Mozilla é legal, ' + myName;
}

/*
Se o armazenamento local estiver vazia a função para definir
o nome do usuário é chamada caso contrário o nome previamente
salvo no armazenamento é exibido, caso esse nome seja nulo
a função para definir o nome do usuário é chamada.
*/
if (!localStorage.getItem('name')) {
  defUserName();
} else {
  let savedName = localStorage.getItem('name');
  myHeader.textContent = 'Mozilla é legal, ' + savedName;
  if (savedName == 'null')
    defUserName();
}

//Atribuindo a função ao botão pertencente ao index.
myButton.onclick = function () { defUserName() }