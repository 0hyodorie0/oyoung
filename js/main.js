$(document).ready(function(){
  let header = $('header');
  let lang_wr = $('.nav_lang');
  let lang = $('.nav_lang .nav_lang_item');
  let active = $('.nav_lang_item.active');
  let list = $('ul.nav_list');

 list.hover(function(){
  if (header.hasClass('open')) {
    header.removeClass('open')
  } else {
    header.addClass('open')
  }
 });


  //lang.first().addClass('active'); //첫번째 언어 active
  lang.click(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).siblings(lang).removeClass('active');
    }
  });

  $('#fullpage').fullpage({
    afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 3000);
        },
    responsiveWidth:1580,
    slidesNavigation:true,
    autoScrolling: true,
    navigation: true,
    navigationPosition:'right',
    anchors:['1','2','3','4','5'],
    afterLoad: function(anchorLink, index) {
      if (anchorLink == '1') {
        header.css('background','rgba(255,255,255,0.2)');
        lang.css('color', '#fff');
        lang_wr.css('border-color', '#fff');
        header.hover(function(){
          header.css('background','rgba(255,255,255)');
          lang.css('color', '#a1a1a0');
          lang_wr.css('border-color', '#a1a1a0');
          active.css('color','#fff');
        }, function(){
          header.css('background','rgba(255,255,255,0.2)');
          lang.css('color', '#fff');
          lang_wr.css('border-color', '#fff');
          active.css('color','#fff');
        });
      } else if (anchorLink == '2') {
        header.css('background', 'rgba(255,255,255)');
        lang.css('color', '#a1a1a0');
        lang_wr.css('border-color', '#a1a1a0');
        active.css('color','#fff');
        header.hover(function(){
          header.css('background','rgba(255,255,255)');
          lang.css('color', '#a1a1a0');
          lang_wr.css('border-color', '#a1a1a0');
        active.css('color','#fff');

        }, function(){
          header.css('background','rgba(255,255,255)');
          lang.css('color', '#a1a1a0');
          lang_wr.css('border-color', '#a1a1a0');
        active.css('color','#fff');

        });
      } else if (anchorLink =='3') {
        header.css('background', 'rgba(255,255,255,0.2)');
        lang.css('color', '#a1a1a0');
        lang_wr.css('border-color', '#a1a1a0');
          header.hover(function(){
          lang.css('color', '#a1a1a0');
          lang_wr.css('border-color', '#a1a1a0');
        }, function(){
          lang.css('color', '#a1a1a0');
          lang_wr.css('border-color', '#a1a1a0');
        });
      } else if (anchorLink == '5') {
        header.css('background', 'rgba(255,255,255)');
        lang.css('color', '#a1a1a0');
        lang_wr.css('border-color', '#a1a1a0');
        active.css('color','#fff');
        header.hover(function(){
          header.css('background','rgba(255,255,255)');
          lang.css('color', '#a1a1a0');
          lang_wr.css('border-color', '#a1a1a0');
        active.css('color','#fff');

        }, function(){
          header.css('background','rgba(255,255,255)');
          lang.css('color', '#a1a1a0');
          lang_wr.css('border-color', '#a1a1a0');
        active.css('color','#fff');

        });
      } else {
        header.css('background', 'rgba(255,255,255,0.2)');
        lang.css('color', '#fff');
        lang_wr.css('border-color', '#fff');
        header.hover(function(){
          header.css('background','rgba(255,255,255)');
          lang.css('color', '#a1a1a0');
          lang_wr.css('border-color', '#a1a1a0');
        }, function(){
          header.css('background','rgba(255,255,255,0.2)');
          lang.css('color', '#fff');
          lang_wr.css('border-color', '#fff');
        });
      }
    }
  });
  $('.partner_slide').owlCarousel({
    items:6,
    nav:true,
    navText:['<div class="nav-button owl-prev"><i class="arrow left"></i></div>','<div class="nav-button owl-next"><i class="arrow right"></i></div>'],
    dots:false,
    responsive: {
      0: {
          items: 2
      },
      600: {
          items: 5
      },
      1000: {
          items: 6
      }
    }
  });

  var $langItem_box = $(".active_box"),
      langItem_w = '',
      langItem_p = '';
  lang.on('click',function(){
    langItem_w = parseInt($(this).innerWidth());
    langItem_p = $(this).position().left;
    $langItem_box.animate({
      width: langItem_w+"px",
      left: langItem_p+"px"
    }, 300);
  });

  $('.main_qna').click(function(){
    $('.modal_wr').addClass('active');
  });
  $('.close').click(function(){
    $('.modal_wr').removeClass('active');
  });

  let hamburger = $('.nav_hamburger'),
      mo = $('.nav_mo');
  hamburger.click(function(){
    hamburger.toggleClass('open');
    mo.toggleClass('open');
  });

  let 
    first_li = $('.nav_mo_ul .nav_link'),
    first_ul = $('.nav_mo_ul > li.relative'),
    arrow = $('.nav_mo_ul .nav_link .arrow.up');
    first_li.click(function(){
      if($(this).parent(first_ul).hasClass('active')){
        $(this).parent(first_ul).removeClass('active');
      } else {
        first_li.parent(first_ul).removeClass('active');
        $(this).parent(first_ul).addClass('active')
      }
    })

    $(function(){
    AOS.init({
       duration: 1200
    });
    onElementHeightChange(document.body, function(){
      AOS.refresh();
    });
});
function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;
    
    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }
});