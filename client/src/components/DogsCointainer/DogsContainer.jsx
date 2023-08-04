import Paginado from '../Paginado/Paginado';
import Dogs from '../Dogs/Dogs';
import style from './DogsContainer.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const DogsContainter = () => {
  const infoDogs = useSelector((state) => state.dogs);

  const [page, setPage] = useState(1);
  const finalPage = page * 8;
  const startPage = finalPage - 8;
  const actualPages = infoDogs?.slice(startPage, finalPage); //solo mostrar 9 cartas
  const totalPage = Math.ceil(infoDogs.length / 8);

  const handlerPrevPage = () => {
    setPage(page - 1);
  };
  const handlerNextPage = () => {
    setPage(page + 1);
  };
  const handlerPageNumber = (n) => {
    setPage(n);
  };

  return (
    <div className={style.container}>
      {actualPages.map((dog) => {
        return (
          <Dogs
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            height={dog.height}
            weight={dog.weight}
            temperaments={dog.temperament}
          />
        );
      })}
      <div className={style.paginado}>
        <Paginado
          totalPages={totalPage}
          page={page}
          prevPage={handlerPrevPage}
          nextPage={handlerNextPage}
          pageNumber={handlerPageNumber}
        ></Paginado>
      </div>
    </div>
  );
};

export default DogsContainter;
