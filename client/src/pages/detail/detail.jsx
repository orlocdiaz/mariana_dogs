import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetail } from "../../redux/actions"
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"

export default function Detail() {

    const params = useParams()
    const { detail } = useSelector((state) => state)
   // const regExp = /<[^>]*>/g;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getDetail(params.id))
    }, [dispatch, params.id]);


    return (
        <div className={style.container}>
            <h2>{detail.name}</h2>
            <h3>Id: {detail.id}</h3>
            <img src={detail.image} alt="" />
            <h4 className={style.temperaments}>Temperaments: {detail.temperaments?.map((temperament) => (
                    <li key={temperament}>{temperament}</li>
                ))}</h4>
            <h3 className={style.hs}>Height: {detail.height} </h3>
            <h3 className={style.hs}>Weight: {detail.weight} </h3>                        
        </div>
    )
}