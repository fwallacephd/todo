var todoText = "";

//Add the todo to the list
$("#submit-todo").on("click", function(){
  event.preventDefault();
  //Get the value of the todo
  todoText = $("[name=todo-item]").val();
  //Create a new <li>
  var newLi = $("<li> <input class='complete' type='checkbox' name='complete'></input> " + todoText + "</li>");
  //Append the new <li>
  $("#todos").append(newLi);

  //Create the delete button
  var deleteText = "Abort";
  var deleteButton = $("<button>" + deleteText + "</button>").addClass("btn delete");
  newLi.append(deleteButton);


  //Reset the value of the todo
  $(".your-todo").val('');
  todoText = "";

});

//Delete Functionality
$("#todos").on("click", ".delete", function(){
  var $li = $(this).parent();
  $li.remove();
});

//Completed Functionality
$("#todos").on("click", ".complete", function(){
  var $li = $(this).parent();
  if ($(this).prop("checked")) {
    $li.css("text-decoration", "line-through");
  } else {
    $li.css("text-decoration", "none");
  }
});


//Edit ToDo Functionality
$("#todos").on("dblclick", "li", function() {
  console.log("click");
});
