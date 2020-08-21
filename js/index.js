////// suavizar el scroll en anchors de href ////////

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

////// animación de titulo de inputs en el form ////////

var formInputs = document.getElementsByClassName("form");

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].children[0].addEventListener("input", function(){
        if(this.value.length == 0){
            this.parentElement.children[1].classList.remove("filled"); 
        }else{
        this.parentElement.children[1].classList.add("filled");
        }
    });
}

////// animaciónes del banner  ////////

var i = 0;
var txt = 'igitally';
var txtTwo = "peaking";
var txtThree = "labs";
var speed = 150;

setTimeout(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("d").innerHTML += txt.charAt(i);
    document.getElementById("s").innerHTML += txtTwo.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  document.getElementById("labs").innerHTML = " Labs";
}, 1500);

setTimeout(function() {
    document.getElementById("labs").style.transform = "scale(1)";
    document.getElementById("labs").style.opacity = "1";
    document.getElementById("us").style.marginTop = "1.5rem";
}, 3000);

setTimeout(function() {
    document.getElementById("us").style.transform = "translateY(0)";
    document.getElementById("us").style.opacity = "1";
}, 3500);

setTimeout(function() {
    document.getElementById("arrow-wrapper").style.opacity = "1";
}, 4000);

////// abrir/cerrar formulario de contacto  ////////

var arrowContact = document.getElementById("arrow-contact");
var formulario = document.getElementById("formulario");
var contacto = document.getElementById("contacto");
var arrowClicks = 1;

arrowContact.addEventListener("click", function(){
    arrowClicks++;
    if(arrowClicks % 2 == 0){
        formulario.style.display = "block";
        arrowContact.style.transform = "rotate(180deg)";
        contacto.style.height = "auto";
    }else{
        formulario.style.display = "none";
        arrowContact.style.transform = "rotate(0deg)";
        contacto.style.height = "";
    }
})