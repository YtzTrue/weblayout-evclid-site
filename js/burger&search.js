$(document).ready(function(){
  $('.burger').click(function(event){
    $('.burger,.nav').toggleClass('active');
  })
  $('.search__btn').click(function(event){
    $('.search').addClass('active');
  })
  $('.search__close-btn').click(function(event){
    $('.search').removeClass('active');
  })
})