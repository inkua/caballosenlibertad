'use client'

import { useState } from "react"

function page() {
    const [file, setFile] = useState(null)
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState('')

    const handlerSubir = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch('http://localhost:3000/api/image', {
            method: 'POST',
            body: formData,
        });

        if (response.status == 200) {
            const result = await response.json();
            setImage(result.data)
            alert('Imagen añadida correctamente')
            console.log("url: ", result.data)
        }
    }

    const handlerActualizar = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', file)
        formData.append('url', url)

        const response = await fetch('http://localhost:3000/api/image', {
            method: 'PUT',
            body: formData,
        });

        if (response.status == 200) {
            const result = await response.json();
            setImage(result.data)
            alert('Imagen añadida correctamente')
            console.log("url: ", result.data)
        }
    }

    const handlerEliminar = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/api/image', {
            method: 'DELETE',
            body: JSON.stringify({
                url: url,
            }),
        });

        if (response.status == 200) {
            setImage('')
            setUrl('')
            setFile('')
            alert('Imagen Eliminada correctamente')
        }
    }

    return (
        <main>
            <h1 className="text-xxl text-purple-800">URL de la imagen: {image}</h1>
            <br />

            <form onSubmit={(e) => handlerSubir(e)}>
                <label htmlFor="image" className="text-lg text-blue-600">Subir</label><br />
                <input type="file" name="image" onChange={(e) => setFile(e.target.files[0])} />
                <br />

                <button className="bg-slate-800 text-white px-4">enviar</button>
            </form>
            <br /><br /><br />


            <form onSubmit={(e) => handlerActualizar(e)}>
                <label htmlFor="image" className="text-lg text-green-800">Actualizar</label><br />
                <input type="file" name="image" onChange={(e) => setFile(e.target.files[0])} />
                <br />
                <label htmlFor="url">url de la imagen:  </label>
                <input type="text" name="url" onChange={(e) => setUrl(e.target.value)}/>
                <br />

                <button className="bg-slate-800 text-white px-4">enviar</button>
            </form>
            <br /><br /><br />


            <form onSubmit={(e) => handlerEliminar(e)}>
                <label htmlFor="image" className="text-lg text-red-800">Eliminar</label><br />
                <label htmlFor="url">url de la imagen:  </label>
                <input type="text" name="url" onChange={(e) => setUrl(e.target.value)}/>

                <button className="bg-slate-800 text-white px-4">enviar</button>
            </form>
            <br /><br /><br />

            {
                image && <img src={image} alt="upload image" className="w-[300px] h-auto" />
            }
        </main>
    )
}

export default page
