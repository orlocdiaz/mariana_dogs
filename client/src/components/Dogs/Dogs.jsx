import style from "./Dogs.module.css";
import { Link } from "react-router-dom";

const Dogs = ({id,name,image,temperaments, weight}) => {


    return(
        <div className={style.dog}>
          <Link to={`/detail/${id}`} className={style.images}>
          <img className={style.images} src={image} alt="img" />
          </Link>
          <h4 className={style.nombres}>{name}</h4>
          <h5 className={style.temperaments} >temperaments:</h5>
          <p className={style.temperaments2}>{`${temperaments }`} </p>
          <h5 className={style.hs}> weight: { weight}</h5>
        </div>
    )
}


export default Dogs