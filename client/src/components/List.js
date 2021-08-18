import { useState, useEffect } from 'react';
import { fetchData, deleteById } from '../lib/fetch.js';
import { Link } from 'react-router-dom';

export const List = () => {
  const [item, setItem] = useState([]);
  const listItems = async () => {
    const listed = await fetchData();
    setItem(listed);
    return listed;
  };

  const selected = (event) => {
    const { id } = event.currentTarget;
    return id;
  };

  const deleteId = (event) => {
    event.preventDefault();
    const { id } = event.currentTarget;
    console.log(item[id]._id);
    deleteById(item[id]._id);
    window.location.reload();
  };

  useEffect(() => {
    listItems();
  }, []);
  return (
    <>
      <Link to={'/'}>Volver</Link>
      <br></br>
      {JSON.stringify(item)}

      <ul>
        {item.map((e, i) => {
          return (
            <li key={i}>
              <p>{e._id}</p>
              <p>{e.data1}</p>
              <p>{e.data2}</p>
              <button onClick={deleteId} id={i}>
                seleccionar
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
