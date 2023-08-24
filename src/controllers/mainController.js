/*reqyuerimos fs*/

/*requerimos el json*/

const data= require('../models/data.json');


console.log(data)
const controller={
    index: (req,res)=>{
        res.render('index',{
            productos:data.results
            })
        }
    }




module.exports=controller;