const Dog = require("../models/Dog");
const getAllDogs = require("./getAllDogsControllers");

const getDogById =async(id,res)=>{
    const allDogsDetail = await getAllDogs();  
    const dog= allDogsDetail.find( dog => dog.id == id);
    if(dog){
        return dog;
        }else{
            throw new Error ("Dog is not found with that id");
            }
        };

const getDogByName = async(name)=>{
    
      const allDogs = await getAllDogs();
      console.log("este setImmediate",allDogs);
    
         const dogFoundByName = allDogs.filter(
             dogName=> dogName.name.toLowerCase().includes(name.toLowerCase()));
             return dogFoundByName;
               }
 
 module.exports={getDogById,getDogByName};





