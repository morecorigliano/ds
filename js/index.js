document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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

var i = 0;
var txt = 'igitally';
var txtTwo = "peaking";
var txtThree = "labs";
var speed = 200;

setTimeout(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("d").innerHTML += txt.charAt(i);
    document.getElementById("s").innerHTML += txtTwo.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  document.getElementById("labs").innerHTML = " Labs";
}, 1600);

setTimeout(function() {
    document.getElementById("labs").style.transform = "scale(1)";
    document.getElementById("labs").style.opacity = "1";
    document.getElementById("us").style.marginTop = "1.5rem";
}, 3500);

setTimeout(function() {
    document.getElementById("us").style.transform = "translateY(0)";
    document.getElementById("us").style.opacity = "1";
}, 4500);

setTimeout(function() {
    document.getElementById("arrow-wrapper").style.opacity = "1";
}, 5000);

var arrowContact = document.getElementById("arrow-contact");
var formulario = document.getElementById("formulario");
var arrowClicks = 1;

arrowContact.addEventListener("click", function(){
    arrowClicks++;
    if(arrowClicks % 2 == 0){
        formulario.style.display = "block";
        arrowContact.style.transform = "rotate(180deg)";
    }else{
        formulario.style.display = "none";
        arrowContact.style.transform = "rotate(0deg)";
    }
})