// gets task from input
function get_todos() {
    // creates array of tasks that are inputed
    var todos = new Array;
    // places item in browser memory
    var todos_str = localStorage.getItem('todo');
    // create js object if not null
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
// add input from get_todos function array
function add() {
    // creates variable of inputed task
    var task = document.getElementById('task').value;
    var todos = get_todos();
    // adds new task to end of array
    todos.push(task);
    // converts task input to JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
}
// permanetly display task on screen
function show() {
    // sets task that was retrieved to variable
    var todos = get_todos();
    // sets each task to unordered list
    var html = '<ul>';
    // displays a task to the list in order it was created
    for (var i = 0; i < todos.length; i++) {
        // displays the task as a list and creates the 'x' button
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    // remove items from todo array
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
    html += '</ul>';
    // displays task as list
    document.getElementById('todos').innerHTML = html;
}
// create functionality of removing todo items from array
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    // examine show() to remove task from screen
    show();
    return false;
}
// displays inputed task whenthe 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// keeps inputs displayed on screen
show();