import { useEffect, useState } from 'react';
import { newData } from '../lib/fetch.js';
import { Link, useParams } from 'react-router-dom';
import '../style/home.css';
import { fetchData } from '../lib/fetch.js';

export const Home = () => {
  const [item, setItem] = useState([]);

  const listItems = async () => {
    const listed = await fetchData();
    setItem(listed);
    return listed;
  };
  useEffect(() => {
    listItems();
  }, []);

  const [data, setData] = useState({
    data1: '',
    data2: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data1, data2 } = data;
    const dataCreated = await newData(data1, data2);
    return dataCreated;
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    const allData = { ...data, [name]: value };
    setData(allData);
  };

  const handleVer = () => {};

  return (
    <div className="wrapper">
      <div className="main">
        <form onSubmit={handleSubmit}>
          <p>Nombre</p>
          <input
            type="text"
            name="data1"
            value={data.data1}
            onChange={handleChange}
          />
          <br></br>
          <p>Edad</p>
          <input
            type="text"
            name="data2"
            value={data.data2}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>submit</button>
          <Link to={'/list'}>Ver Base de datos</Link>;<br></br>
          <br></br>
          <ul>
            {item.map((e, i) => {
              return (
                <>
                  <li key={i}>
                    {/* <p>{e._id}</p> */}
                    <p>{e.data1}</p>
                    <p>{e.data2}</p>
                  </li>
                </>
              );
            })}
          </ul>
          <li>
            <button onClick={handleVer}>Ver</button>
            <button>Editar</button>
            <button>Borrar</button>
          </li>
        </form>
      </div>
      <div className="sub">
        <div className="input"></div>
      </div>
    </div>
  );
};
