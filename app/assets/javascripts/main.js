window.alert('こんにちは');
$(function(){
  $('.life_button').on('click', function(){
    var input = $('.life').val();
    var min = 1;
    var anser =  input - min  
    $('.life').val(anser);
    return false
  })
});