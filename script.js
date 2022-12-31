 /*	<!---img sliding start--> */
    let slideIndex = 0;
    showSlides();
    
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
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
   
 /*	<!---img sliding start--> */
 
/*<!---nav bar start-->*/
 //javascript for navigation bar effect on scroll
 window.addEventListener("scroll", function(){
   var header = document.querySelector("header");
   header.classList.toggle('sticky', window.scrollY > 0);
 });

 //javascript for responsive navigation sidebar menu
 var menu = document.querySelector('.menu');
 var menuBtn = document.querySelector('.menu-btn');
 var closeBtn = document.querySelector('.close-btn');

 menuBtn.addEventListener("click", () => {
   menu.classList.add('active');
 });

 closeBtn.addEventListener("click", () => {
   menu.classList.remove('active');
 });

/*<!---nav bar end-->*/
