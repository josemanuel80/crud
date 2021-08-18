import { useState, useEffect } from 'react';
import { fetchData } from '../lib/fetch.js';
import { Link } from 'react-router-dom';

export const List = () => {
  const [item, setItem] = useState([]);
  const listItems = async () => {
    const listed = await fetchData();
    setItem(listed);
    return listed;
  };

  useEffect(() => {
    listItems();
  }, []);
  return (
    <>
      <br></br>
      <Link to={'/'}>Volver a la pagina principal</Link>
      <ul>
        {item.map((e, i) => {
          return (
            <ul key={i}>
              <li>{JSON.stringify(item)}</li>
            </ul>
          );
        })}
      </ul>
    </>
  );
};
