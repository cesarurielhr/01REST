const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/',(req, res)=> {
    const tasks = taskController.getAllTasks()
    res.json(tasks);
});
router.get('/:id',(req, res)=> {
    
    const tasks = taskController.getSpecificTask(req.params.id)
    if(tasks){
    res.json(tasks);
    }else{
        res.status(404).json({code:404, message: 'Task not found'})
    }
});
router.put('/:id',(req, res)=> {
    const {id} = req.params
    const {title, description} = req.body;
    const newTask = taskController.updatetask(id,title, description);
    res.status(200).json(newTask);


});
router.post('/',(req, res)=> {
    const {title, description} = req.body;
    const newTask = taskController.createTask(title, description);
    res.status(200).json(newTask);


});
router.delete('/:id',(req, res) => {
        const deleteTask = taskController.deleteTask(req.params.id);
        res.status(200).json(deleteTask);

});

module.exports = router;

