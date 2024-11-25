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
  newProduct.role = "admin";
  newProduct.password = await generarContrasenaSegura();
  const text = `Hola ${newProduct.name} ${newProduct.lastname}, bienvenido a Caballos en libertad. Tu contraseña es: ${newProduct.password}, podes cambiarla en {link}`;
  try {
    const res = await sendEmail(
      newProduct.mail,
      "Bienvenido a Caballos en Libertad",
      text
    );
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }

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
