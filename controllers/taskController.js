let tasks = [
    {
        id: 1, 
        tilte:"Tarea1", 
        description:"Descripcion tarea 1"
    },
    {
        id: 2, 
        title:"Tarea2",
        description:"Descripcion tarea 2"   
    },
    {
        id: 3, 
        title:"Tarea3",
        description:"Descripcion tarea 3"   
    },
];

function getAllTasks() {
    return tasks;
}
function createTask(title, description) {
    const id = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    
    const newTask = {
        id: id,
        title,
        description
    };
    tasks.push(newTask);
    return newTask;    
    
}
function deleteTask(id) {
    tasks.splice(id-1, 1);
    return tasks;
    
}
function updatetask(id,title, description) {
   
}

function getSpecificTask(id){
    
    return tasks[id-1];
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updatetask,
    getSpecificTask
}