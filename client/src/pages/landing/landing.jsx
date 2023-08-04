import { Link } from "react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
    return (
        <div className={style.landing}>
          <div className={style.container}>
            <h1>PI DOGS</h1>
            <div className={style.frase}>
              <h4>
              El mundo de los cachorros
              </h4>
            </div>
            <Link to="/home">
              <button>Enter</button>
            </Link>
          </div>
        </div>
      );
}

export default Landing;