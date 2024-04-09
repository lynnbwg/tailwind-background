var concours = document.querySelector("#btn_cta");

var progressfill = anime({
  targets: '#btn_cta svg path',
  easing: 'easeInOutSine',
  fill: '#000000',
  delay:5,
  duration: 1500,
  direction: 'alternate',
  loop: true
});

//----------------------------------------------------------------------------------------------------------NAVBAR
// Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the "main-nav" element
          var $target = document.getElementById('main-nav');
  
          // Toggle the class on "main-nav"
          $target.classList.toggle('hidden');
  
        });
      });
    }
  
  });
//----------------------------------------------------------------------------------------------------------GSAP
gsap.from('#nav , #contact-titre', {
    opacity:0.5,
    duration : 1,
  })

gsap.fromTo("#info-contact", {
    duration: 0.5,
  },{   

    ease: 'none',
    scrollTrigger: {
        trigger: '#main',
        start:'top bottom',
        end:'bottom top',
        scrub: true,
        //markers:true
    }
  })

const timeline = gsap.timeline({
    defaults:{
        duration:1,
    },

});

timeline.from('body',{
    duration:1.5,
    ease:'none'
})
.fromTo(
    ['#info-contact'],{
        opacity:0,
        y:-20,
    },{
        duration:0.6,
        y:0,
        ease:'none',
        opacity:1,
        ease:'power1.out',
        stagger:0.2,

    },)

    //----------------------------------------------------------------------------------------------------------FORMULAIRE VALIDETTA
    var btn_cta = document.getElementById("btn_cta");
    var btn_quitter = document.getElementById("btn_quitter");
    
    var container = document.querySelector("#validetta-container");
    var logoparallax = document.querySelector("#parallax-container");
    
    btn_cta.addEventListener('click', () => {
      container.style.display = 'flex';
      logoparallax.style.display = 'none';
    })
    
      btn_quitter.addEventListener('click', () => {
        container.style.display = 'none';
        logoparallax.style.display = 'flex';
    
    });
    
    $(document).ready(function(){

    
      $('#form').validetta({
          realTime: true,
          onValid : function( event ) {
              event.preventDefault(); //prevent submission of form
              //alert ('Nice, form is valid');
    
              //e.preventDefault();
    
              var name = $('#name').val();
              var mail = $('#mail').val();
              var message = $('#message').val();
    
      $.ajax({
          //1 on definit le fichier vers lequel on envoye la requete post
          url : 'php/info.php',
          //2 on specifie la methode
          type: 'POST', //le type de la requete http, donc ici c'est post
          //3 on definit les variables pOST qui sont envoyÃ©es au fichier php qui les recupere en POST
    
          data: {
              name : name,
              mail : mail,
              message : message
          }, //on fait passer nos variables au script
    
          //4 format de retour du fichier dans 'data'
          datatype : 'html',
    
          //5 fonction a effectuer en cas de succes
          success : function(data){
              $('.contenu').html(data);
          }
    
      });       
          },
          onError : function(event){
              event.preventDefault();
              //alert ('stop il y a des erreurs');
          }
      });
    
      $("btn").click(function(e){
    
      })
    })
