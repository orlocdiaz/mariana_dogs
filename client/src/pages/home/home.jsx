import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DogsContainter from '../../components/DogsCointainer/DogsContainer';
import {
  getDogs,
  filterbyOrigin,
  orderDogAlphabetic,
  getTemperaments,
  clearFilters,
  weightOrder,
  filterDogByTemperaments,
} from '../../redux/actions';

export default function Home() {
  const dispatch = useDispatch();
  const [option, setOption] = useState('');
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  const { temperaments } = useSelector((state) => state);

  const handleFilterByTemperaments = () => {
    dispatch(filterDogByTemperaments(selectedTemperaments));
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(clearFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const filterHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'Origin') {
      dispatch(filterbyOrigin(value));
    }
  };

  const handleOrderAlphabetic = () => {
    dispatch(orderDogAlphabetic(option));
  };

  const handleWeightOrder = (event) => {
    const selectedOption = event.target.value;
    dispatch(weightOrder(selectedOption));
  };
  const handleClearFilters = () => {
    dispatch(getDogs());
  };

  return (
    <div>
      <div>
        <select
          name="Origin"
          onChange={filterHandler}
          defaultValue="Filter by origin"
        >
          <option disabled>Filter By</option>
          <option value="All">All</option>
          <option value="Api">Api</option>
          <option value="DataBase">DataBase</option>
        </select>
        <select
          onClick={handleOrderAlphabetic}
          defaultValue="Filter by Alphabetetic"
          onChange={(e) => setOption(e.target.value)}
        >
          <option disabled>Order by Alphabetic</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select defaultValue="Filter by weight" onChange={handleWeightOrder}>
          <option disabled>order by weight</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          onClick={handleFilterByTemperaments}
          value={selectedTemperaments}
          onChange={(e) =>
            setSelectedTemperaments(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {temperaments.map((temperament) => (
            <option key={temperament.id} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
        </select>
        <button onClick={handleClearFilters}>Delete filters</button>
      </div>
      <br />
      <DogsContainter />
    </div>
  );
}
