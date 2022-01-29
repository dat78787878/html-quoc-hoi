



function doAnimations( elems ) {
  var animEndEv = 'webkitAnimationEnd animationend';
  elems.each(function () {
    var $this = $(this),
    $animationType = $this.data('animation');
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
  });
});
}
function loadMenuMobile() {
//   var nut = document.querySelector('div.icon i');
//  var mobile = document.querySelector('ul');
 
//   var mobile = $('nav');
  var nav = $('.menu_wrapper');
  var menu = nav.children('ul');
//  nut.addEventListener('click',function(){
       //     mobile.classList.toggle('active');
  // })

  if ($(window).width() < 991) {
      var showMenu  = $('#button_menu');
      menu.find('li').each(function(index, el) {
          if ($(this).find('ul li').length > 0) {
              $(this).prepend('<i class="fas fa-angle-down"></i>');
          }
          $(this).attr("data-animation","animated fadeInLeft");
      });
      menu.find('i').click(function(event) {
          var offParent = $(this).offsetParent();
          var index = $(this).offsetParent().children('ul');
          var _this = $(this);
          if (index.is(':hidden')) {
              offParent.parent().find('ul').not(index).slideUp(250);
              offParent.parent().find('ul').not(index).siblings('i').removeClass('active');
              index.slideToggle(250);
              _this.addClass('active');
              event.stopPropagation();
          } else {
              _this.removeClass('active');
              index.slideUp(250);
          }
          event.stopPropagation();
      });
  }
  showMenu .click(function(event) {
     
      if (!nav.hasClass('active')) {
          showMenu .addClass('open');
      //   blur.addClass('active');
         nav.addClass('active');
         menu.find('li').each(function(index, el) {
          doAnimations($(this));
      });
     } else {
          showMenu .removeClass('open');
         nav.removeClass('active');
      //   blur.removeClass('active');
     }
     event.stopPropagation();
 });
}
      document.addEventListener("DOMContentLoaded",function(){
       
      //   nut.addEventListener('click',function(){
       //      mobile.classList.toggle('active');
       // })

        loadMenuMobile();
      })
       



     



  
      
     