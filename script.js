const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;

const addTodo = ()=>{

   const inputText =inputBox.value.trim();
   if(inputText.length <=0){

    alert("you must write something in your todo");
    return false;
   }

   if(addBtn.value === "Edit"){

      editTodo.target.previousElementSibling.innerHTML = inputText;

      addBtn.value = "Add";
      inputBox.value ="";
   }

   else{

    const li = document.createElement("li");
   const p = document.createElement("p");
   p.innerHTML = inputText;
   li.appendChild(p);


   const editBtn = document.createElement("button");
   editBtn.innerText = "Edit";
   editBtn.classList.add("btn", "editBtn");
   li.appendChild(editBtn);


   const deleteBtn = document.createElement("button");
   deleteBtn.innerText = "Remove";
   deleteBtn.classList.add("btn", "deleteBtn");
   li.appendChild(deleteBtn);
   
   todoList.appendChild(li);
   inputBox.value = '';
   }
}

const updateTodo = (e)=>{

   //console.log(e.target.innerHTML);

   if(e.target.innerHTML === "Remove"){

     todoList.removeChild(e.target.parentElement);
   }

   if(e.target.innerHTML ==="Edit"){

      inputBox.value = e.target.previousElementSibling.innerHTML;
      inputBox.focus();
      addBtn.value = "Edit";
      editTodo = e;
   }
}
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click',updateTodo);