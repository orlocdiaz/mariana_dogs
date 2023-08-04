import {
  ADD_DOG,
  GET_DOGS,
  GET_QUERY_DOG,
  GET_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENTS,
  FILTER_BY_ORIGIN,
  WEIGHT_ORDER,
  ALPHABETIC_ORDER,
  GET_DETAIL_DOG,
  DELETE_FILTERS,
} from "./actions-types";


const initialState = {
  dogs: [],
  myDogs: [],
  detail: {},
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        myDogs: action.payload
      };
    case ADD_DOG:
      return {
        ...state,
        myDogs: [...state.myDogs, action.payload],
        dogs: [...state.dogs, action.payload]
      };
    case GET_QUERY_DOG:
      return {
        ...state,
        myDogs: action.payload,
      }
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload
      };
    case GET_DETAIL_DOG:
      return {
        ...state,
        detail: action.payload,
      };
    case FILTER_BY_TEMPERAMENTS:
      const selectedTemperaments = action.payload; // Temp seleccionadas desde la acción
      // Filtrar los cachorros según los temps seleccionadas
      const filteredDogs = state.dogs.filter((dog) => {
        // Si no hay temps seleccionados, mostrar todas los cachorros
        if (selectedTemperaments.length === 0) {
          return true;
        }
        // Si el dog tiene alguna de los temp seleccionados, mostrarlo
        return selectedTemperaments.every((temp) => dog.temperaments.includes(temp));
      });
      return {
        ...state,
        dogs: filteredDogs, // Actualizar el estado recipes con las recetas filtradas
      };
      case ALPHABETIC_ORDER:
        const sortedDogs = [...state.dogs]; // Copia del array de recetas
        sortedDogs.sort((a, b) =>
            action.payload === 'A-Z'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        );
        return {
            ...state,
            recipes: sortedDogs,
        };

    case WEIGHT_ORDER:
      let listaPeso= [...state.dogs]
      if(action.payload === 'minMax') {
          listaPeso.sort( (obj1, obj2) => {
              if( Number(obj1.weight.split(" - ")[0]) < Number(obj2.weight.split(" - ")[0])) {
                  return -1
              } else {
                  return 1
              }
          } )
      }
      if(action.payload === 'maxMin') {
          listaPeso.sort( (obj1, obj2) => {
              if( Number(obj1.weight.split(" - ")[1]) < Number(obj2.weight.split(" - ")[1])) {
                  return 1
              } else {
                  return -1
              }
          } )
      }
      return{
          ...state,
          dogs:listaPeso
      }  

      // let listOfdogss = state.allDogs;
      // const value = action.payload === 'heavy' ? 
      // listOfdogss.sort(function(a, b){
      //       return parseInt(b.weight) - parseInt(a.weight);
      //  }):
      //     listOfdogss.sort(function(a, b){
      //         return parseInt(a.weight) - parseInt(b.weight);
      //          });
      //            return {
      //                ...state,
      //                allDogs: value
      //                     };
          
          
    case FILTER_BY_ORIGIN:
      const filtered = state.myDogs.filter((dog) => {
        const regExp = /^[0-9]+$/;
        if (action.payload === "Api" && regExp.test(dog.id)) {
          return true;
        } else if (action.payload === "DataBase" && !regExp.test(dog.id)) {
          return true;
        }
        else if (action.payload === "All") {
          return true;
        }else {
          return false;
        }
      })
      
      return {
        ...state,
        dogs: filtered
      };
    case DELETE_FILTERS:
      return {
        ...state,
        dogs: initialState.dogs, // Restablecer al estado inicial de las recetas
      };
    default:
      return { ...state };
  }
}

export default rootReducer;