class Task{
    constructor(parent){
        this.parent = parent;
        this._createTask();
    }
    
    _createTask(){
        this.line = document.createElement('li');
        this.checkbox = document.createElement('input');
        this.text = document.createElement('label');
        this.buttonsDiv = document.createElement('div')
        this.buttonArchive = document.createElement('button');
        this.buttonDelete = document.createElement('button');

        
        this.checkbox.classList.add("checkbox-task");
        this.text.classList.add("text-task");
        this.buttonsDiv.classList.add('div-buttons');
        this.buttonArchive.classList.add('archive-task');
        this.buttonDelete.classList.add('delete-task');

        this.text.textContent = "Escreva aqui...";

        this.checkbox.type = "checkbox";

        this.checkbox.addEventListener('click', this._check)
        this.text.addEventListener('click', this._editTask);
        this.text.addEventListener('keydown', function(){
            this.text = event.target;
            if (this.text.textContent == "Escreva aqui..."){
                this.text.textContent = "";
            }
        })
        this.text.addEventListener('blur', function(){
            this.text = event.target;
            var text = this.text.textContent
            if (text.replace(/\s/g, "") == ""){
                this.text.textContent = "Escreva aqui...";
            }
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
        this.text = event.target;
        this.text.contentEditable = true;
    }

    _Archive(){
        this.line = event.target.parentElement.parentElement;
        this.line.remove();
    }

    _check(){
        var line = event.target.parentElement;
        setTimeout(function(){
            line.remove();
        }, 200);
    }
}

let buttonAddTask = document.getElementById('add-task')
let taskList = document.getElementById('tasks')
buttonAddTask.addEventListener('click', function(){
    var task = new Task(taskList);
})