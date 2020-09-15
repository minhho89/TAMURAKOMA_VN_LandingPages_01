$(document).ready(function(){
    $('#nav_toggle').click(function(){
        $("header").toggleClass('open');
        $("nav").slideToggle(500);
    });
    var dom = $('.menu_third');
    dom.hide();
    $('.menu_third_trigger').click(function () {
      if (dom.css('display') == 'none') {
        $(".menu_third_trigger li").not(this).next().slideUp("fast");
        $(this).toggleClass("open").next().slideToggle("fast");
        $('.menu_third').show();
        $('.plus').hide();
      } else {
        $(".menu_third_trigger li").not(this).next().slideUp("fast");
        $('.menu_third').hide();
        $('.plus').show();
      }
    })
});