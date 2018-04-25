var todoText = "";

//Add the todo to the list
$("#submit-todo").on("click", function(){
  event.preventDefault();
  //Get the value of the todo
  todoText = $("[name=todo-item]").val();
  //Create a new <li>
  var newLi = $("<li>" + todoText + "</li>");
  //Append the new <li>
  $("#todos").append(newLi);

  //Create the delete button
  var deleteText = "Abort";
  var deleteButton = $("<button>" + deleteText + "</button>").addClass("btn delete");
  $("#todos li").append(deleteButton);

  //Add Checkbox
  var checkbox = $("<input type='checkbox' name='complete'></input>").addClass("complete");
  $("#todos li").append(checkbox);

  //Reset the value of the todo
  $(".your-todo").val('');
  todoText = "";

});

//Delete Functionality
$("#todos").on("click", ".delete", function(){
  var $li = $(this).parent();
  console.log($li);
  $li.remove();
});

//Completed Functionality
$("#todos").on("click", ".complete", function(){
  var $li = $(this).parent();
  $li.css("text-decoration", "line-through");
})
