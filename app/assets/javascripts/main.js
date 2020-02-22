// window.alert('こんにちは');
// 以下失敗したコードだが軌跡として残す
// $(document).on('ready page:load', function(){
// $(document).on('pagecontainerbeforechange', function(){
$(document).on('click', '.life_button', function(){
// $('.life_button').on('click', function(){
  var input = $('.life').val();
  var min = 1;
  var anser =  input - min 
  if(input >= 1){
    $('.life').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});

$(document).on('click', '.move_button', function(){
    var input = $('.move').val();
    var min = 1;
    var anser =  input - min 
    if(input >= 1){
      $('.move').val(anser);
    }
    else{
      window.alert('0以下には出来ません');
    }
    return false
});

$(document).on('click', '.attack_button', function(){
  var input = $('.attack').val();
  var min = 1;
  var anser =  input - min 
  if(input >= 1){
    $('.attack').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});

$(document).on('click', '.range_button', function(){
  var input = $('.range').val();
  var min = 1;
  var anser =  input - min 
  if(input >= 1){
    $('.range').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});