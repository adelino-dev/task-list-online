class Task{
    constructor(parent){
        this.parent = parent;
        this._createTask();
    }
    
    _createTask(){
        this.line = document.createElement('li');
        this.checkbox = document.createElement('input');
        this.text = document.createElement('div');
        this.buttonsDiv = document.createElement('div')
        this.buttonArchive = document.createElement('button');
        this.buttonDelete = document.createElement('button');

        
        this.checkbox.classList.add("checkbox-task")
        this.text.classList.add("text-task");
        this.buttonsDiv.classList.add('div-buttons')
        this.buttonArchive.classList.add('archive-task');
        this.buttonDelete.classList.add('delete-task');

        this.text.textContent = "Escreva aqui...";
        this.checkbox.type = "checkbox";

        this.text.addEventListener('click', function(){
            this.text = event.target;
            this.text.contentEditable = true;
        })

        this.buttonArchive.addEventListener('click', this._Archive);
        this.buttonDelete.addEventListener('click', this._deleteTask);
        
        this.buttonsDiv.appendChild(this.buttonArchive);
        this.buttonsDiv.appendChild(this.buttonDelete);
        this.line.appendChild(this.checkbox)
        this.line.appendChild(this.text);
        this.line.appendChild(this.buttonsDiv);
        this.parent.appendChild(this.line);
    }

    _deleteTask(){
        this.line = event.target.parentElement.parentElement;
        this.line.remove();
    }

    _editTask(){

    }

    _Archive(){
        
    }
}

let buttonAddTask = document.getElementById('add-task')
let taskList = document.getElementById('tasks')
buttonAddTask.addEventListener('click', function(){
    var task = new Task(taskList);
})