import style from './form.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validation from './validation';
import { addDog } from '../../redux/actions';
import { getTemperaments } from '../../redux/actions';
import { useEffect } from 'react';

export default function Form() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.temperaments);
  const [temperament, setTemperament] = useState([]);

  const [dog, setDog] = useState({
    name: '',
    image: '',
    height: '',
    weight: '',
    temperaments: [],
  });
  const [error, setError] = useState({
    name: '',
    image: '',
    height: '',
    weight: '',
    temperaments: [],
  });

  const handleTemperaments = (e) => {
    if (e.target.checked) {
      setTemperament([...temperament, e.target.value]);
      setDog({ ...dog, temperaments: [...temperament, e.target.value] });
    } else {
      console.log('el cachorro no tiene ningun temperamento');
    }
  };

  const inputChange = (event) => {
    const key = event.target.name;
    const val = event.target.value;
    setDog({
      ...dog,
      [key]: val,
    });
    setError(
      validation({
        ...dog,
        [key]: val,
      })
    );
  };

  const handlerSubmit = async (event) => {
    console.log(dog);
    event.preventDefault();
    dispatch(addDog(dog));
    alert('✅Dog created successfully!!✅');
  };

  return (
    <div className={style.container}>
      <form onSubmit={handlerSubmit}>
        <label> Name Dog: </label>
        <input
          type="text"
          name="name"
          value={dog.name}
          onChange={inputChange}
        />
        {error.name && <p className={style.error}></p>}
        <label>Image: </label>
        <input
          type="text"
          name="image"
          value={dog.image}
          onChange={inputChange}
        />
        {error.image && <p className={style.error}></p>}
        <label>Height: </label>
        <input
          name="height"
          type="text"
          value={dog.height}
          onChange={inputChange}
        />
        <label>Weight: </label>
        <textarea
          type="text"
          name="weight"
          value={dog.weight}
          onChange={inputChange}
        />
        <label>LS: </label>
        <textarea
          type="text"
          name="life_span"
          value={dog.life_span}
          onChange={inputChange}
        />

        <div className={style.types}>
          <h3>Temperaments: </h3>
          <div className={style.typesOrder}>
            {temperaments.map((e) => (
              <div className={style.container}>
                <ul className={style.ksCboxtags}>
                  <li>
                    <input
                      onChange={handleTemperaments}
                      type="checkbox"
                      id={`checkbox${e.name}`}
                      value={e.name}
                    />
                    <label for={`checkbox${e.name}`}>{e.name}</label>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {error.temperaments && (
          <p className={style.error}>{error.temperaments}</p>
        )}
        {!error.name &&
        !error.image &&
        !error.height &&
        !error.weight &&
        temperaments.length >= 1 ? (
          <button className={style.createButton}>Create</button>
        ) : (
          <button className={style.disabledButton}>Create</button>
        )}
      </form>
      <div className={style.card}>
        <h6>{dog.healthScore}</h6>
        <img src={dog.image} alt="" className={style.image} />
        <h3>{dog.name}</h3>
        <br />
      </div>
    </div>
  );
}
