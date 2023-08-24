/*reqyuerimos fs*/

/*requerimos el json*/

const data= require('../models/data.json');


console.log(data)
const controller={
    index: (req,res)=>{
        res.render('index',{
            productos:data.results
            })
        },
    detailMenu:(req,res)=>{
        const {id}= req.params;
        const menu = productos.find(plato=>plato.id===id)
        if(menu){
            res.render('detalleMenu',{
                'menu':menu
            })
        } else{
            res.render('detalleMenu', {'menu':null, 'menuNotFind':'Menu not found'})
        }
    }
    }




module.exports=controller;