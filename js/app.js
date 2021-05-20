// MENU MOBILE
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav){
      toggle.addEventListener('click', () => {
          nav.classList.toggle('menu-mobile');
          toggle.classList.toggle('active-bx');
      })
  }
}

showMenu('bx', 'menu-mobile')

// Primeiro modal (Luciana)
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

// Segundo modal (Julliete)
var modalJ = document.getElementById("myModal-j");
var btnJ = document.getElementById("myBtn-j");
var spanJ = document.getElementsByClassName("close-j")[0];

btnJ.onclick = function () {
  modalJ.style.display = "block";
}

spanJ.onclick = function () {
  modalJ.style.display = "none";
}

// Terceiro modal (Maria Eduarda)
var modalM = document.getElementById("myModal-m");
var btnM = document.getElementById("myBtn-m");
var spanM = document.getElementsByClassName("close-m")[0];

btnM.onclick = function () {
  modalM.style.display = "block";
}

spanM.onclick = function () {
  modalM.style.display = "none";
}

// Quarto modal (Gustavo Alessandro)
var modalG = document.getElementById("myModal-g");
var btnG = document.getElementById("myBtn-g");
var spanG = document.getElementsByClassName("close-g")[0];

btnG.onclick = function () {
  modalG.style.display = "block";
}

spanG.onclick = function () {
  modalG.style.display = "none";
}

// MODAL EMAIL BOTÃO
var modalEmail = document.getElementById("email-modal");
var btnEmailHero = document.getElementById("btnEmailHero");
var btnEmailContact = document.getElementById("btnEmailContact");
var closeEmailModal = document.getElementsByClassName("close-email")[0];

btnEmailHero.onclick = function () {
  modalEmail.style.display = "block";
}

btnEmailContact.onclick = function () {
  modalEmail.style.display = "block";
}

closeEmailModal.onclick = function () {
  modalEmail.style.display = "none";
}

// MODAL PARCEIRO BOTÃO
// var modalParceiro = document.getElementById("parceiro-modal");
// var btnParceiro = document.getElementById("btnParceiro");
// var spanParceiro = document.getElementsByClassName("close-parceiro")[0];

// btnParceiro.onclick = function () {
//   modalParceiro.style.display = "block";
// }

// spanParceiro.onclick = function () {
//   modalParceiro.style.display = "none";
// }

// Trajetoria da evolução modais

var modalControle = document.getElementById("controle-modal");
var btnControle = document.getElementById("btnControle");
var spanControle = document.getElementsByClassName("close-controle")[0];

btnControle.onclick = function () {
  modalControle.style.display = "block";
}

spanControle.onclick = function () {
  modalControle.style.display = "none";
}

var modalMecanica = document.getElementById("mecanica-modal");
var btnMecanica = document.getElementById("btnMecanica");
var spanMecanica = document.getElementsByClassName("close-mecanica")[0];

btnMecanica.onclick = function () {
  modalMecanica.style.display = "block";
}

spanMecanica.onclick = function () {
  modalMecanica.style.display = "none";
}

var modalEletronica = document.getElementById("eletronica-modal");
var btnEletronica = document.getElementById("btnEletronica");
var spanEletronica = document.getElementsByClassName("close-eletronica")[0];

btnEletronica.onclick = function () {
  modalEletronica.style.display = "block";
}

spanEletronica.onclick = function () {
  modalEletronica.style.display = "none";
}

var modalDesign = document.getElementById("design-modal");
var btnDesign = document.getElementById("btnDesign");
var spanDesign = document.getElementsByClassName("close-design")[0];

btnDesign.onclick = function () {
  modalDesign.style.display = "block";
}

spanDesign.onclick = function () {
  modalDesign.style.display = "none";
}

var modalProgramacao = document.getElementById("programacao-modal");
var btnProgramacao = document.getElementById("btnProgramacao");
var spanProgramacao = document.getElementsByClassName("close-programacao")[0];

btnProgramacao.onclick = function () {
  modalProgramacao.style.display = "block";
}

spanProgramacao.onclick = function () {
  modalProgramacao.style.display = "none";
}

var modalSustentabilidade = document.getElementById("sustentabilidade-modal");
var btnSustentabilidade = document.getElementById("btnSustentabilidade");
var spanSustentabilidade = document.getElementsByClassName("close-sustentabilidade")[0];

btnSustentabilidade.onclick = function () {
  modalSustentabilidade.style.display = "block";
}

spanSustentabilidade.onclick = function () {
  modalSustentabilidade.style.display = "none";
}