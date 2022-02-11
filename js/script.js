$('.burger').click(function(){
    $('.mob-content').slideToggle()
});
$('.menu-link').click(function(){
    $('.mob-content').hide();
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

   var swiper = new Swiper(".myslider", {
     loop:true,
     spaceBetween: 0,
     slidesPerView: 1,
     allowTouchMove:false,

     pagination: {
       el: ".swiper-pagination",
       type: "fraction",

     },
     navigation: {
       nextEl: ".button-prev",
       prevEl: ".button-next",
     },
     breakpoints: {
    //   499: {
    //     slidesPerView: 2,
    //     spaceBetween: 100,

    // },
    //   768: {
    //     slidesPerView: 1,
    //     spaceBetween: 0,

    // },
      1000: {

          slidesPerView: 3,
          spaceBetween: 0,

      },
      1230: {
        slidesPerView: 5,
        spaceBetween: 0,

    },
       
  }
});
var s = new Swiper(".myrewies", {
  loop:true,
  allowTouchMove:false,
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
        $(this).find('img').attr('src','./image/play-up.png');
      }else{
        $(this).parents().children('.faq__subblock').removeClass('faq__item--opened');
        $(this).css({'backgroundColor':'transparent','color':'black'});
        $(this).find('img').attr('src','./image/play-arr.png');

      }
 
    })
  $(document).ready(function() {
  $("a.menu-link").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
  });
});  
/////


$('.check').click(function(){
  $('.more-info').toggle();
});

$(document).ready(function(){
  $('#telephone').inputmask('+ 7 (999)-999-99-99',{placeholder:''})
  $('#tele_phone').inputmask('+ 7 (999)-999-99-99',{placeholder:''})

});

var modal = document.getElementById("myModal");

// Get the button that opens the modal

$('.addcall').click(function(){
  $('.modalcall').hide();
  $('.boxcont-2').show();
})
///////////
$('.order-tel').click(function(){
  $('#popup2').css({'visibility':'visible','opacity':'1'});
});
$('.order-taxi').click(function(){
  $('#popup1').css({'visibility':'visible','opacity':'1'});
})
var modal = document.getElementById("popup2");
var modal2 = document.getElementById("popup1");
window.onclick = function(event) {
  if (event.target == modal) {
    $('#popup2').css({'visibility':'hidden','opacity':'0'});


  }
  else if (event.target == modal2) {
       $('#popup1').css({'visibility':'hidden','opacity':'0'});
    
    
      }
}
///selectPicker

$(document).ready(function () {
   
  $elem = $('#ex-search').picker({search : true},);
  $('#ex-search-2').picker({search : true});
  $('#ex-search-3').picker({search : true});
  $('#ex-search-4').picker({search : true});
 
  $elem.on('sp-change', function(){
   //   $(this).data("data-id");
   var val = $(this).val();
    if(val === 'Жд вокзал'){
      $('.fm-4').show();
    }
    if(val === "Аеропорт"){
      $('.fm-4').hide();
    }
    if(val=== "Межгород"){
      $('.fm-4').show();

    }

  });

});
