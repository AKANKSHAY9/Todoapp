const form= document.getElementById('form');
const input=document.getElementById('input');
const todoUL =document.getElementById("todos");
const todos= JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo=>{
        addTodo(todo);
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addTodo();
});
function addTodo(todo){
    const todoText= input.value;

    if(todoText){
        const todoE1= document.createElement("li");
        todoE1.innerText= todoText;

        todoE1.addEventListener('click', ()=>{
            todoE1.classList.toggle('completed');
        });

        todoE1.addEventListener('dblclick',(e)=>{
            e.preventDefault();
            todoE1.remove();
        });
        todos.appendChild(todoE1);

        input.value="";

    }
    updateLS();
};

function updateLS(){
    const todosE1= document.querySelectorAll('li');
    const todos=[];

    todosE1.forEach(todos => {
        todos.push({
            text: todosE1.innerText,
            completed: todosE1.classList.contains('completed'),
        });
        
    });
    localStorage.setItem("todos", JSON.stringify(todos));

}