let slideIndex = 0;
showSlides();

function showSlides() { let slideIndex = 0;
  showSlides();
  /*Inicio da criação do loop das imagens 
  LET = Variável
  FOR = Estrutura de Repetição
  IF= Condição*/
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    /*SETTIMEOUT = Tempo de transição dos slides em milisegundos*/
    setTimeout(showSlides, 8000); // Change image every 2 seconds
  }
 
}