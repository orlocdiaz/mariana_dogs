import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogs, getQueryDog } from "../../redux/actions";
import style from "./SearchBar.module.css";


export default function SearchBar (){
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    
    
    const searchHandler = (event) =>{
        const {value} = event.target
        if(value){
            dispatch(getQueryDog(value))
        }else{
            dispatch(getDogs())
            
        }
    }
    const handlerInput = (event) => {
        if(!event.target.value){
            dispatch(getDogs());
            setInput('')
        }else{
            setInput(event.target.value)
        }
    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            searchHandler(event)
        }
      }
    return (
        <div className={style.searchbar}>
            <input type="text" name='search' placeholder="Dog" value={input} onChange={handlerInput} onKeyDown={handleKeyPress}/>
            <button onClick={searchHandler} value={input}>Search</button>
        </div>
    )
}