"use client";
import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";

import React from "react";
import UploadImages from "../../../componets/UploadImages/UploadImages";

function FormEvent({ isOpen, setIsOpen, saveEvent, data, add = true }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [info, setInfo] = useState("");
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");
  const [location, setLocation] = useState("");

  const formatDateForInput = (date) => {
    if (date instanceof Timestamp) {
      return date.toDate().toISOString().split("T")[0];
    } else if (data && date) {
      return new Date(date.seconds * 1000).toISOString().split("T")[0];
    }
    return "";
  };

  const parseDateFromInput = (inputValue) => {
    const dateObject = new Date(inputValue + "T00:00:00");
    return Timestamp.fromDate(dateObject);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      title,
      date,
      info,
      url,
      location
    };

    if (add) {
      saveEvent(newData);
    } else {
      saveEvent({ newData, id: id });
    }

    setTitle("");
    setDate("");
    setInfo("");
    setUrl("");
    setLocation("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDate(data.date);
      setInfo(data.info);
      setUrl(data.url);
      setId(data.id);
      setLocation(data.location)
    }
  }, [data]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-[500px] lg:w-[900px] max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 ">
              {add ? "Registrar" : "Actualizar"}
            </h2>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-black " htmlFor="username">
                    Nombre del evento:
                  </label>
                  <input
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    id="username"
                    value={title}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black " htmlFor="emailAddress">
                    Fecha:
                  </label>
                  <input
                    required
                    type="date"
                    id="fecha"
                    value={formatDateForInput(date)}
                    onChange={(e) => setDate(parseDateFromInput(e.target.value))}
                    name="fecha"
                    className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black " htmlFor="password">
                    Descripción:
                  </label>
                  <textarea
                    required
                    onChange={(e) => setInfo(e.target.value)}
                    id="password"
                    value={info}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 min-h-[60px] max-h-[160px] text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black " htmlFor="location">
                    Ciudad - dirección:
                  </label>
                  <input
                    required
                    onChange={(e) => setLocation(e.target.value)}
                    id="location"
                    value={location}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                {/* <input type="file" onChange={(e) => setUrl(e.target.files[0])} /> */}

                <UploadImages image={url} setImage={setUrl} />
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <span className="mx-1">{add ? "Guardar" : "Actualizar"}</span>
                </button>

                <button
                  className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
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
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="mx-1">Cancelar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FormEvent;
