import {
  addElement,
  deleteElement,
  getAllElements,
  getElementById,
  updateElement,
  addImage,
  delImage,
} from "./container";
import generarContrasenaSegura from "@/utils/crearContraseñaAleatoria";
import { sendEmail } from "@/app/services/emailSender.service";
const addUser = async (newProduct) => {
  return await addElement(newProduct, "users");
};

const delUser = async (Pid) => {
  return await deleteElement(Pid, "users");
};

const getUserById = async (Pid) => {
  return await getElementById(Pid, "users");
};

const getUsers = async () => {
  return await getAllElements("users");
};

const setUser = async (newData, Pid) => {
  return await updateElement(newData, Pid, "users");
};

const addUserImage = async (newImage) => {
  return await addImage(newImage, "users");
};

const delUserImage = async (image) => {
  return await delImage(image);
};

export {
  addUser,
  delUser,
  getUserById,
  getUsers,
  setUser,
  addUserImage,
  delUserImage,
};
