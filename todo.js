// store the input in the add todo value

let addTodo = document.getElementById("addtodo");
// store the  ul in todolist variable
let todoList = document.getElementById("todoList");

// if addtodo is enter it will add another todo

addTodo.addEventListener("keypress",(e) =>{

    // if the input value is empty it will may not create the new list
    if(e.code === "Enter" && addTodo.value !== '' ){
     

// get store the input value in the variable

    let Todo = e.target.value;
    // alert(Todo)
    // create the new li element
    let todoItem = document.createElement("li");
 // create the new button element
    let todobtn = document.createElement("button")
    // get the date and time by created task
    let todoId = new Date().getTime();


    todoItem.innerHTML = `<input id="${todoId}" type="checkbox">
                <label  for="${todoId}">${Todo}</label>`
    // todobtn.innerHTML = `<button id=${todoId} class="btn">x</button>`

          todoList.appendChild(todoItem);
        //   todoList.appendChild(todobtn);
       
          addTodo.value = "";

       
    }
  

});

todoList.addEventListener("click", (e)=>{

   if (e.target.checked){
    e.target.parentElement.classList.add("end")
    alert("you're wanna make the task as completed");
   }else{
    e.target.parentElement.classList.remove("end")
}
});



// let button = document.querySelector(".btn");
// // console.log(button);
// button.addEventListener("click",(e)=>{
//    e.target.parentElement.remove("todolist");
   
  

// })
