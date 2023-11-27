 $('#button1').click(function () {
    var add=$('input[name=listof]').val();
    if($('input[name=listof]').val()===''){
        alert('please write something !')
     }
     else
 {$('ol').append('<li >'+add+'</li><button id="butt" ></button>')

}
$('#butt').click(function(){
  
    add.css('text-decoration','line-through')   
})
 });  
//when user write something and press the button,the text will be added to a list and displayed under the white background with a checkbox and when there is no input it will be an alert





