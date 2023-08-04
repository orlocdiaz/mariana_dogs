const axios= require("axios");
const {Temperament} =require("../db");

const getAllTemperaments = async(req,res)=>{    
    const temperaments = [];
    const temperamentApi= await axios.get(`https://api.thedogapi.com/v1/breeds?limit=10`)
    const temperamentsFound= temperamentApi.data.forEach(dog => {
       
        const temperamentDog = dog.temperament ? dog.temperament.split(", ") : [];   //se divide en un array utilizando el método `split(", ") , de lo contrario, se asigna un array vacío  [] . Esto asegura que  temperamentDog  siempre sea un array, incluso si  dog.temperament` es nulo o indefinido.
                if(temperamentDog){
            for(let i=0; i< temperamentDog.length; i++){
                !temperaments.includes(temperamentDog[i]) 
                ? temperaments.push(temperamentDog[i]) 
                : null
                };
          }
        })

        temperaments.forEach(temperamentName => {
            Temperament.findOrCreate({
                where: {name: temperamentName},
            });            
        });
        return Temperament.findAll();
    };

module.exports= getAllTemperaments;
