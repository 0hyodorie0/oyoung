$(document).ready(function(){
  $('.tab_content').hide(); // 모든 컨텐츠 가리기
  $('.tabs li:first').addClass('active').show(); //첫번째 탭 active
  $('.tab_content:first').show(); //첫번째 탭 보이기

  $('.tabs li').click(function(){
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
  $('.qna_btn').click(function(){
    $('.modal_wr').addClass('active');
  });
  $('.close').click(function(){
    $('.modal_wr').removeClass('active');
  });

  $('.prd_related').owlCarousel({
    items:5,
    nav: true,
    margin:10,
    responsive: {
      0: {
          items: 1
      },
      600: {
          items: 3
      },
      1000: {
          items: 5
      }
    }
  });
  const up = $('.brd_doc_intro_header > .arrow.up.fl-right');
  const cont = $('.brd_doc_intro_cont');
  const down = $('.one_column_open');
  const review = $('.one_column_cont');
  
  up.click(function(){
    if (up.hasClass('active')) {
      up.removeClass('active');
      cont.css('max-height','1px');
      cont.css('padding','0');
    } else {
      up.addClass('active');
      cont.css('max-height','464px');
      cont.css('padding','2em');
    }
  });

  down.click(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).prev(review).css('max-height', '12em');
    } else {
      $(this).prev(review).css('max-height', '42em');
      $(this).addClass('active');
    }
  });

  const cate = $('.sm_category > a');
  cate.click(function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).siblings($('a')).removeClass('active');
    }
  });

  const prdMenu = $('.tab_content .page_title .category .col .dep_btn');
  prdMenu.click(function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).siblings(prdMenu).removeClass('active');
    }
  });

});