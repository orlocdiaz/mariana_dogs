const getAllDogs = require("../controllers/getAllDogsControllers");
const { getDogById, getDogByName } = require("../controllers/getDogsControllers");

//GET | /dogs/:idRaza- {detalle}*DogsRoutes.get('/dogs/:id',
const getDogsDetailHandler = async(req,res)=>{
    const {id} =req.params;
   
    try {
        const dogById= await getDogById(id);
        res.status(200).json(dogById);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};


// GET | /dogs
//GET | /dogs/name?="..."-*-DogsRoutes.get('/dogs', 
const getDogsHandler= async(req, res)=>{
    const {name} = req.query;
    try {
        if(name){
        const dogByName= await getDogByName(name);
       
       return res.status(200).json(dogByName);
        }else{
            const allDogs= await getAllDogs();
          return  res.status(200).json(allDogs);
        }
    } catch (error) {
        res.status(400).json({error:error.message});        
    }
}


module.exports ={getDogsDetailHandler, getDogsHandler};