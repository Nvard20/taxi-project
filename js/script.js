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
});
$(document).ready(function () {
   
  $('#ex-search').picker({search : true},);
  $('#ex-search-2').picker({search : true});
  $('#ex-search-3').picker({search : true});
  $('#ex-search-4').picker({search : true});

});
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("mybtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
///
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("mybtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}
$('.addcall').click(function(){
  $('.modalcall').hide();
  $('.boxcont-2').show();
})