import {
  getAllData,
  getDataResourceById,
  newData,
  editData,
  deleteResourceById,
} from '../models/app.js';
export const getData = async (req, res) => {
  const listData = await getAllData();
  return res.send(listData);
};

export const getDataById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const dataResource = await getDataResourceById(id);
  if (dataResource) {
    return res.status(200).send(dataResource);
  } else {
    return res.status(400).send({ message: 'id not found' });
  }
};

export const createData = async (req, res) => {
  const { body } = req;
  const createResourceData = await newData(body);
  res.send(createResourceData);
};

export const updateDataById = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  const updateData = await editData(id, body);
  return res.send(updateData);
};

export const deleteData = async (req, res) => {
  const {
    params: { id },
  } = req;
  const deleteResource = await deleteResourceById(id);
  return res.send(deleteResource);
};
