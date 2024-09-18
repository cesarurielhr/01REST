const express = require('express');

const bodyParser = require('body-parser');
const tasksRoutes = require('./routers/taskRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/task',tasksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
console.log(`Servidor corriendo en el puerto ${PORT}`);  
});