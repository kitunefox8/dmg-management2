$(document).on('click', '.poison-minus_button', function(){
  var input = $('.poison').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.poison').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.poison-plus_button', function(){
  var input = $('.poison').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  // console.log(anser);
  if(input == ""){
    $('.poison').val(up);
  }
  else{
    $('.poison').val(anser);
  }
  return false
});

$(document).on('click', '.blood-minus_button', function(){
  var input = $('.blood').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.blood').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.blood-plus_button', function(){
  var input = $('.blood').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.blood').val(up);
  }
  else{
    $('.blood').val(anser);
  }
  return false
});

$(document).on('click', '.foot-minus_button', function(){
  var input = $('.foot').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.foot').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.foot-plus_button', function(){
  var input = $('.foot').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.foot').val(up);
  }
  else{
    $('.foot').val(anser);
  }
  return false
});

$(document).on('click', '.arms-minus_button', function(){
  var input = $('.arms').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.arms').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.arms-plus_button', function(){
  var input = $('.arms').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.arms').val(up);
  }
  else{
    $('.arms').val(anser);
  }
  return false
});

$(document).on('click', '.faint-minus_button', function(){
  var input = $('.faint').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.faint').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.faint-plus_button', function(){
  var input = $('.faint').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.faint').val(up);
  }
  else{
    $('.faint').val(anser);
  }
  return false
});

$(document).on('click', '.confusion-minus_button', function(){
  var input = $('.confusion').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.confusion').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.confusion-plus_button', function(){
  var input = $('.confusion').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.confusion').val(up);
  }
  else{
    $('.confusion').val(anser);
  }
  return false
});

$(document).on('click', '.curse-minus_button', function(){
  var input = $('.curse').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.curse').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.curse-plus_button', function(){
  var input = $('.curse').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.curse').val(up);
  }
  else{
    $('.curse').val(anser);
  }
  return false
});

$(document).on('click', '.invisible-minus_button', function(){
  var input = $('.invisible').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.invisible').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.invisible-plus_button', function(){
  var input = $('.invisible').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.invisible').val(up);
  }
  else{
    $('.invisible').val(anser);
  }
  return false
});

$(document).on('click', '.buff-minus_button', function(){
  var input = $('.buff').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.buff').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.buff-plus_button', function(){
  var input = $('.buff').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.buff').val(up);
  }
  else{
    $('.buff').val(anser);
  }
  return false
});

$(document).on('click', '.blessing-minus_button', function(){
  var input = $('.blessing').val();
  var min = 1;
  var anser =  input - min;
  if(input >= 1){
    $('.blessing').val(anser);
  }
  else{
    window.alert('0以下には出来ません');
  }
  return false
});
$(document).on('click', '.blessing-plus_button', function(){
  var input = $('.blessing').val();
  var up = 1;
  var input_int = parseInt(input);
  var anser = input_int + up;
  if(input == ""){
    $('.blessing').val(up);
  }
  else{
    $('.blessing').val(anser);
  }
  return false
});
