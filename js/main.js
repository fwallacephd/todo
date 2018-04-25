var todoText = "";

//Add the todo to the list
$("#submit-todo").on("click", function(){
  todoText = $("[name=todo-item]").val();
  var newLi = $("<li>" + todoText + "</li>");
  $("#todos").append(newLi);
  $(".your-todo").val('');
  todoText = "";
});
