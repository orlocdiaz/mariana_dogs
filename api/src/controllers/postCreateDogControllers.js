 const {Dog, Temperament} =require("../db");

const postCreateDogControllers = async(image,name,height,weight,life_span,temperament)=>{
   
    const dogCreated = await Dog.create({
        image,
        name,
        height,
        weight,
        life_span,
    })
    
    const temperamentDB = await Temperament.findAll({        
        where:{
            name: temperament                                
        }
    });
    
     await dogCreated.addTemperament(temperamentDB);
                   
    
    return dogCreated;
};

module.exports = postCreateDogControllers;

