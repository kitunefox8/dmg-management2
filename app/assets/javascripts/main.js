// window.alert('こんにちは');
// 以下失敗したコードだが軌跡として残す
// $(document).on('ready page:load', function(){
// $(document).on('pagecontainerbeforechange', function(){
// $('.life_button').on('click', function(){
$(document).on('click', '.life-minus_button', function(){
  var input = $('.life').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.life').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.life-plus_button', function(){
  var input = $('.life').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.life').val(up);
  }
  else{
    $('.life').val(anser);
  }
  return false
});

$(document).on('click', '.move-minus_button', function(){
  var input = $('.move').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.move').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.move-plus_button', function(){
  var input = $('.move').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.move').val(up);
  }
  else{
    $('.move').val(anser);
  }
  return false
});

$(document).on('click', '.attack-minus_button', function(){
  var input = $('.attack').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.attack').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.attack-plus_button', function(){
  var input = $('.attack').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.attack').val(up);
  }
  else{
    $('.attack').val(anser);
  }
  return false
});

$(document).on('click', '.range-minus_button', function(){
  var input = $('.range').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.range').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.range-plus_button', function(){
  var input = $('.range').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.range').val(up);
  }
  else{
    $('.range').val(anser);
  }
  return false
});