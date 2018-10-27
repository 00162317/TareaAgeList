window.onload = init;
   
function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            let auxi = document.createElement("auxi");
            auxi.innerText = task;
            auxi.style.textDecoration = "none";
            element.appendChild(auxi);
            element.style.display = "flex";
            /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });*/
             comp.addEventListener("click", function(){
                let texto = this.parentNode.firstChild;
                if (texto.style.textDecoration == "none"){
                    texto.style.textDecoration = "line-through";
                }
                else {
                    texto.style.textDecoration = "none";
                }
            });
             // Añadir un boton para marcar de finalizado
             let comp = document.createElement("input");
             comp.type = "button";
             comp.value = "Finalizado";
             comp.style.margin = "1em";
            // Elmine de la lista
            let deletes = document.createElement("input");
            deletes.type = "button";
            deletes.value = "Borrar";
            deletes.style.margin = "1em";
            deletes.addEventListener("click", function(){
                let parent = this.parentNode.parentNode;
                parent.removeChild(this.parentNode);
            });
            element.appendChild(comp);
            element.appendChild(deletes);
            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } 
            else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}