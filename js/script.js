$(document).ready(function(){
    $('Слайдер').slick({

        arrow:false,
        dots:true,

        slidesToShow:2,
        centerMode:true,
        variableWidth:true,

        appendArrows:$('.nav_arrows'),

    });

  

});
document.getElementById('nav').classList.add('open')
document.addEventListener('click', function(event){
    console.log(event.target.classList)
    if(event.target.classList.contains('openNav')){
        document.getElementById('nav').classList.remove('open')
    }
    if(event.target.classList.contains('xClose')){
        document.getElementById('nav').classList.add('open')
    }
})