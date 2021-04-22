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
