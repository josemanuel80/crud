import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema(
  {
    /* data1: { type: String, unique: true }, */
    data1: String,
    data2: Number,
  },
  {
    timestamps: true,
  },
);
const Data = mongoose.model('Data', dataSchema);

//****buscar lo que contenga "texto1" */
/* export const getAllData = async () => {
  return Data.find({}, { data1: 'texto1' });
}; */
//****interesante */

export const getAllData = async () => {
  return Data.find();
};

export const getDataResourceById = async (id) => {
  return Data.findById(id);
};

export const newData = async (body) => {
  return Data.create({ ...body });
};

export const editData = (id, body) => {
  return Data.findByIdAndUpdate(id, { ...body });
};

export const deleteResourceById = (id) => {
  return Data.findByIdAndDelete(id);
};
