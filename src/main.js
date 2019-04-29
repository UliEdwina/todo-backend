window.onload = init;

function init() {
    getTodos();
    // postTodo();
    // document.querySelector('#get').addEventListener('click', getTodos);
    document.querySelector('#post').addEventListener('click', postTodo);
    // document.querySelector('#put').addEventListener('click', updateThirdTodo);
}

function getTodos() {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/todos');
    xhr.setRequestHeader('Content-Type', 'application/json'); 
    xhr.send();
    xhr.onload = display;

    
    
}

function postTodo(event) {
    event.preventDefault();
    const answer = document.getElementById('input').value;
    const newTodoTwo = {
        text: answer,
        completed: false
    };
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/todos');
    xhr.setRequestHeader('Content-Type', 'application/json');
    const jsonnedTodoTwo = JSON.stringify(newTodoTwo);
    xhr.onload = handlePost;
    xhr.send(jsonnedTodoTwo);
}



function updateThirdTodo(event) {
    event.preventDefault();
    const updatedTodo = {
        text: '????',
        completed: true
    };
    const jsonnedTodo = JSON.stringify(updatedTodo);
    
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:3000/todos/3');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = clear;
    xhr.send(jsonnedTodo);
}
function clearUl(){
    const todos = document.querySelector('#postdom')
    while(todos.hasChildNodes()){
        todos.removeChild(todos.firstChild);
    }
}
function display() {
    let jFresh = JSON.parse(event.target.responseText);

    renderContent(jFresh);
    
    
}
function handlePost(){
    clearUl();
    let post = JSON.parse(event.target.responseText);
    console.log('workeshere');
    addsNewLi(post);

}

function renderContent(todos){
    todos.forEach(addsNewLi)
    
}
    // function renderContentTwo(todos){
        
    //     const content = document.getElementById("newpost");
    //     todos.forEach(t => {
    //         //creates a new element "ul" and storing it 
    //         let contentList = document.createElement("li");
    //         //displays more data from the api.
    //         contentList.innerText = `*${t.id}
    //         ${t.text}
    //         ${t.completed}`;
       
    //         //hass child element.
    //         content.append(contentList);
    //     }
    // }
    function addsNewLi(todo){
            const content = document.getElementById("postdom");
    //creates a new element "ul" and storing it 
            let contentList = document.createElement("li");
    //displays more data from the api.
            contentList.innerText = `*${todo.id}
            ${todo.text}
            ${todo.completed}`;

    //hass child element.
            content.append(contentList);
    }

