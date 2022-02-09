$('.burger').click(function(){
    $('.mob-content').slideToggle()
});
////
$(document).ready(function(){
 
  
    //Dynamic Next
   $(".btn-next").on("click", function(){
     nextStep = $("#" + $(this).parents(".slider-step").data("nextStep"));
     $(this).parents(".slider-step").attr("data-anim","hide-to--left");
     nextStep.attr("data-anim","show-from--right");
   });
   
   //Dynamic Back
   $(".btn-back").on("click", function(){

     backTo = $("#" + $(this).parents(".slider-step").data("backTo"));
     backTo.attr("data-anim","show-from--left")

     
 
   });

 });

   var swiper = new Swiper(".mySwiper", {
     loop:true,
     slidesPerView:1,
     spaceBetween: 0,
     freeMode: false,

     pagination: {
       el: ".swiper-pagination",
       type: "fraction",
     },
     navigation: {
       nextEl: ".button-prev",
       prevEl: ".button-next",
     },
     breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 0,

    },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,

    },
      1000: {
          slidesPerView: 4,
          spaceBetween: 0,

      },
      1230: {
        slidesPerView: 5,
        spaceBetween: 0,

    },
       
  }
});
new Swiper(".myrewies", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
var btn = true;
  
    $('.faq__btn').click(function(){
      btn =!btn;
      if(!btn){
        $(this).parents().children('.faq__subblock').addClass('faq__item--opened');
        $(this).css({'backgroundColor':'#19446A','color':'white'});
        $(this).find('img').attr('src','../image/play-up.png');
      }else{
        $(this).parents().children('.faq__subblock').removeClass('faq__item--opened');
        $(this).css({'backgroundColor':'transparent','color':'black'});
        $(this).find('img').attr('src','../image/play-arr.png');

      }
 
    })

  


