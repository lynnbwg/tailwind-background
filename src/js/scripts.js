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