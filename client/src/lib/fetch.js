export const fetchData = async () => {
  const fetched = await fetch('http://localhost:5000/crud');
  return fetched.json();
};

export const fetchDataById = async (id) => {
  const fetchById = await fetch(`http://localhost:5000/crud/${id}`);
  return fetchById;
};

export const putData = async (id) => {
  const putAllData = await fetch(`http://localhost:5000/crud/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      id: id,
    },
  });
};

export const deleteById = async (id) => {
  const fetchById = await fetch(`http://localhost:5000/crud/${id}`, {
    method: 'DELETE',
  });
  return fetchById.json();
};

export const newData = async (data1, data2) => {
  const created = await fetch('http://localhost:5000/crud', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data1: data1,
      data2: data2,
    }),
  });
};
