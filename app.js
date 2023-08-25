const express=require('express');
const app= express();

const path=require('path');


app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./src/views/index.html'))
})

/*implementando ejs*/
app.set('view','ejs');
app.set('views','./src/views')

/*importando rutas*/
const rutaMain=require('./src/routes/main');
/*rutas*/
app.use('/',rutaMain);




app.listen(3000,()=>console.log("Servidor funcionando"));