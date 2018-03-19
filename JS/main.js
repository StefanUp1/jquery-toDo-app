//add new ToDo
$('input[type="text"]').on('keypress',function(e){
  if(e.which === 13) {
    let todoText = $(this).val();
    $(this).val('');
    $('ul').append('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span>' +todoText+ '</li>')
  }
});

//check off specific todo by clicking it
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//click trash to delete ToDo
$('ul').on('click', 'span', function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
   e.stopPropagation();
});

//fade input field on toggle
$('.fa-plus-circle').click(function(){
  $('input[type="text"]').fadeToggle();
});
