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