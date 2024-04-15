//----------------------------------------------GSAP ALL SCREEN
gsap.from('body', {
    opacity:0,
    duration : 0.5,
  })

const timeline = gsap.timeline({
    defaults:{
        duration:0.5,
    },
});

//----------------------------------------------NAVIGATION
timeline.from('body',{
    duration:0.5,
    ease:'none'
})
.fromTo(
    ['#nav-text'],{
        opacity:0,
        y:-10,
    },{
        duration:0.5,
        y:0,
        ease:'none',
        opacity:1,
        ease:'power1.out',
        stagger:0.2,

    },) 
//----------------------------------------------THIRD CONTAINER LAST CHANCE
gsap.timeline({
    scrollTrigger: {
    trigger: "#third",
    scrub: true,
    start: 'top 80%',
    end: 'bottom 70%',
    //markers: true,
        },
        })
    .fromTo(
    "#third",
        {
    x: '+=20px',
        },{ 
    x: '0px',
    ease: 'none',
    duration:0.5,
        },)    
//----------------------------------------------FOURTH CONTAINER TOP SELLER    
gsap.timeline({  
    scrollTrigger: { 
    trigger: "#fourth", 
    //markers:true,
    start: 'top 90%',
    end: 'bottom 60%',
    },})   
.fromTo(
    ['#top-seller'],{
    opacity:0,
    y:20,
    },{
    duration:0.5,
    y:0,
    ease:'none',
    opacity:1,
    ease:'power1.out',
    stagger:0.2,
    },) 
//----------------------------------------------THIRD CONTAINER LAST CHANCE
gsap.timeline({
    scrollTrigger: {
    trigger: "#fifth",
    scrub: true,
    start: 'top 80%',
    end: 'bottom 70%',
    //markers: true,
        },
        })
    .fromTo(
    "#fifth",
        {
    x: '+=20px',
        },{ 
    x: '0px',
    ease: 'none',
    duration:0.5,
        },) 

/*
gsap.registerPlugin(ScrollTrigger);

    $( document ).ready(function() {
    
            gsap.to(["#third"],{
            x:-10,
            ease:'none',
            scrollTrigger:{
            trigger:' #second',
            start: 'top',
            end: 'bottom',
            pin: true,
            scrub:true,
            //markers:true,
            },
            })
    
    
            gsap.timeline({
              scrollTrigger: {
                trigger: ".bottom-text .bottom-h1",
                scrub: true,
                start: 'top 90%',
                end: 'bottom 75%%',
                //markers: true,
              },
            })
*/


/*
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


/*
$( '#collection' ).click(function(){ 

    $('html,body').animate({
        scrollTop: $(".second-container").offset().top},
        'fast');

});


$('.add-to-cart').on('click', function () {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '1',
                'position': 'absolute',
                'height': '120px',
                'width': '80px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 40,
                'height': 60
            }, 1000, 'easeInOutExpo');

        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});




/*const addCart = document.querySelector('add-to-cart');

for(var i = 0; i < addCart; i++){
    addCart [i].addEventListener('click', () => {
        cartCount();
    })
}

function cartCount(){
    let productNumbers = localStorage.getItem('cartNumber');
    productNumbers = parseInt(productNumbers);


    if(productNumbers){
        localStorage.setItem('cartNumber', productNumbers + 1);
        document.querySelector('.nav span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumber', 1);
        document.querySelector('.nav span').textContent = 1;
    }
    }
    function loadCartNumbers(){
        let productNumbers = localStorage.getItem('cartNumber');
        if(productNumbers){
            document.querySelector('nav span').textContent = productNumbers;
        
        
    }


}
loadCartNumbers();

/*var noti = document.querySelector('h3');
var button = document.getElementsByTagName('button');
for(but of button)
{
    but.addEventListener('click', (e)=>{
        console.log('click')
        var add = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count', add +1);
        noti.classList.add('zero');
    })
}
*/




/*$('.add-to-cart').on('click', function () {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.8',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});
*/