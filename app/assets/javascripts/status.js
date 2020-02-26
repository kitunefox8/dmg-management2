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
  var input = parseInt(input);
  var anser = input + up;
  // console.log(anser);
  $('.poison').val(anser);
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
  var input = parseInt(input);
  var anser = input + up;
  $('.blood').val(anser);
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
  var input = parseInt(input);
  var anser = input + up;
  $('.foot').val(anser);
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
  var input = parseInt(input);
  var anser = input + up;
  $('.arms').val(anser);
  return false
});