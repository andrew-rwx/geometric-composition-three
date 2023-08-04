const express=require('express');
const vite=require('vite');
const app=express();
app.use(express.static('public'));
//avvio della configurazione di vite tramite default
async function startServer(){
    //creazione dell'istanza server Vite
    const viteIstance=await vite.createServer();
    app.use(viteIstance.middlewares);

    const port=3000;
    app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server in ascolto")
    }
    })
    
    /*---ROUTES---*/

    app.get('/',(req,res)=>{
        res.sendFile('index.html',{path: 'public'});
    });




}
startServer();

