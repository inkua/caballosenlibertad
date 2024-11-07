"use client";
import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";

import React from "react";
import UploadImages from "../../../componets/UploadImages/UploadImages";

function FormUser({ isOpen, setIsOpen, saveUser, data, add = true }) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [creation, setCreation] = useState("");
  const [lastMod, setLastMod] = useState("");
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      name,
      mail,
      password,
      creation: add ? Timestamp.now() : data.creation,
      lastMod: Timestamp.now(),
      url,
    };

    if (add) {
      saveUser(newData);
    } else {
      saveUser({ newData, id: id });
    }

    setName("");
    setMail("");
    setPassword("");
    setCreation("");
    setLastMod("");
    setUrl("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (data) {
      setName(data.name);
      setMail(data.mail);
      setPassword(data.password);
      setCreation(data.creation);
      setLastMod(data.lastMod);
      setUrl(data.url);
      setId(data.id);
    }
  }, [data]);

  return (
    <>
      {isOpen && (
        <div classNameName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div classNameName="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-[500px] lg:w-[900px]">
            <h2 classNameName="text-xl font-bold mb-4 ">
              {add ? "Añadir nuevo usuario" : "Editar usuario"}
            </h2>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div classNameName="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label classNameName="text-black " htmlFor="username">
                    Nombre:
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    id="username"
                    value={name}
                    type="text"
                    classNameName="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label classNameName="text-black " htmlFor="emailAddress">
                    Correo:
                  </label>
                  <input
                    onChange={(e) => setMail(e.target.value)}
                    id="emailAddress"
                    value={mail}
                    type="text"
                    classNameName="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label classNameName="text-black " htmlFor="password">
                    Contraseña:
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="text"
                    classNameName="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    classNameName="text-black "
                    htmlFor="passwordConfirmation">
                    Password Confirmation:
                  </label>
                  <input
                    id="passwordConfirmation"
                    type="text"
                    classNameName="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <UploadImages image={url} setImage={setUrl} />
              </div>

              <div classNameName="flex justify-end space-x-4 pt-4">
                <button
                  type="submit"
                  classNameName="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    classNameName="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <span classNameName="mx-1">{add ? "Save" : "Edit"}</span>
                </button>

                <button
                  classNameName="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                  onClick={() => {
                    setIsOpen(false), setUrl("");
                  }}
                  type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    classNameName="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <span classNameName="mx-1">Cancel</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FormUser;
