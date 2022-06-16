const { Contenedor } = require('./clases/Contenedor.js');
const { Producto } = require('./clases/Producto.js');
const fs = require('fs').promises;
let fsModule;

async function iniciarProceso(){
    try {
        const hasFile = await fsModule.hasFile();
        if(!hasFile){
            const create = await fsModule.createFile();
            if(create !== true){
                throw "Error al crear el archivo";
            }else{
                return true;
            }
        }else{
            return true;
        }       
    } catch (error) {
        console.error(`Error: ${error}`);
        return false;
    }
}

fsModule = new Contenedor(fs, 'productos.txt');

if(!fsModule.checkFs()){
    throw "Contenedor debe recibir un objeto fs con promises.";
}else{
    iniciarProceso()
    .then((res)=>{
        if(res === true){
            // //Test Agregar un nuevo producto
            // const prod = new Producto('Ultimo otrop', 200, 'https://images.freeimages.com/images/large-previews/9fb/boat-1171740.jpg');
            // fsModule.save(prod)
            // .then((res)=>{console.log(res)})
            // .catch((error)=>{error.message});

            // //Test getById
            // fsModule.getById(4)
            // .then((res)=>{console.log(res)})
            // .catch((error)=>{error.message});

            // //Test Get All.
            // fsModule.getAll()
            // .then((res)=>{console.log(res)})
            // .catch((error)=>{error.message});

            // //Test deleteById
            // fsModule.deleteById(3)
            // .catch((error)=>{error.message});

            // //Test deleteAll
            // fsModule.deleteAll()
            // .catch((error)=>{error.message});            
        }else{
            console.error('Proceso no iniciado');
        }
    })
    .catch((error)=>{error.message});
}



