$(document).ready(function () {
    // Functionality to add a task when the button is clicked
    $('#button1').click(function() {
      var task = $('#list').val();
      if (task.length === 0) {
        alert('Please enter a task!');
      } else {
        $('#tasks').append('<br><br><li>' + task + '</li>');
      }
    });
    
    // Functionality to mark a task as completed (line-through and change background color) on single click
    $(document).on("click", "#tasks li", function() {
      $(this).css('text-decoration', 'line-through');
      $(this).css('background-color', 'red');
    });
  
    // Functionality to remove a task on double-click
    $(document).on("dblclick", "#tasks li", function() {
      $(this).remove();
    });
  });





