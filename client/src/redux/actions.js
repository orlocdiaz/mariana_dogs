import axios from "axios"
import {
    ADD_DOG,
    GET_DOGS,
    GET_TEMPERAMENTS,
    FILTER_BY_TEMPERAMENTS,
    FILTER_BY_ORIGIN,
    WEIGHT_ORDER,
    ALPHABETIC_ORDER,
    GET_DETAIL_DOG,
    DELETE_FILTERS,
  } from "./actions-types";


export const addDog = (dog) => {
    return async function (dispatch) {
        try {
           const response = await axios.post("http://localhost:3001/dogs", dog);
        return dispatch({type: ADD_DOG, payload: response.data});
        } catch (error) {
         alert("No se pudo crear el cachorro");
        }
    };
};

export const getDogs = () => {
    return async function (dispatch) {
        const getInfo = await axios.get("http://localhost:3001/dogs");
         const dogs = getInfo.data;
         dispatch({type: GET_DOGS, payload: dogs})
    };
};

export const getQueryDog = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            dispatch({type:GET_DOGS, payload:
            response.data})
        } catch (error) {
            alert("No encontre se encontro el cachorro ")
        }
    }
}

export const getDetail = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`)
            
            dispatch({type: GET_DETAIL_DOG, payload: response.data});
        } catch (error) {
            alert("No existe el cachorro con el ID solicitado ");
        }
    };
};
 
export const getTemperaments = () => {
    return async function (dispatch){ 
    try {
        const response = await axios.get("http://localhost:3001/temperaments");
        dispatch({type: GET_TEMPERAMENTS, payload: response.data });
    } catch (error) {
        alert("Mi base de datos no tiene los temperamentos solicitados");
       }
    };
};

export const filterDogByTemperaments = (temperaments) => {
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload: temperaments,
    };
};

export const orderDogAlphabetic = (option) => {
    return {
        type: ALPHABETIC_ORDER,
        payload: option,
    };
};

export const filterbyOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin,
    };
};

export const weightOrder = (score) => {
    return {
        type: WEIGHT_ORDER,
        payload: score,
    };
};

export const clearFilters = () => {
    return {
      type: DELETE_FILTERS,
    };
  };

