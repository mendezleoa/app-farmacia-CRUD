import { useState } from "react";

export default function Formulario() {


    const [nombreprod, setNombreprod] = useState('');
    const [categoria, setCategoria] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:4000/items', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreprod: nombreprod,
                categoria: categoria,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion
            })
        });
    }


    return (
        <div className="flex-none container max-w-xl mx-auto px-10 pt-2 pb-4 bg-teal-900 shadow hover:shadow-xl shadow-black rounded text-stone-100">
            <form onSubmit={handleSubmit}>
                <h1 className="mt-5 text-l font-bold">Agregar nuevo producto</h1>
                <div className="mb-2">
                    <label className="block mb-2 text-m font-medium text-gray-100">Nombre del Producto
                        <input type="text"
                            name="nombreprod"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Nombre del producto"
                            value={nombreprod}
                            onChange={(e)=>setNombreprod(e.target.value)}
                            required />

                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Categoria del Producto
                        <input type="text"
                            name="categoria"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Categoría"
                            value={categoria}
                            onChange={(e)=>setCategoria(e.target.value)}
                            required />
                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Existencia del Producto
                        <input type="number"
                            name="cantidad"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Cantidad"
                            value={cantidad}
                            onChange={(e)=>setCantidad(e.target.value)}
                            required />
                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Precio del Producto
                        <input type="number"
                            name="precio"
                            id="precio"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Precio"
                            value={precio}
                            onChange={(e)=>setPrecio(e.target.value)}
                            required />
                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Descripción del Producto
                        <input type="text"
                            name="descripcion"
                            className="mb-5 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Descripción"
                            value={descripcion}
                            onChange={(e)=>setDescripcion(e.target.value)} />
                    </label>
                </div>
                <input type="submit"
                value="Enviar"
                className="rounded bg-green-600 px-4 py-2 cursor-pointer" />
            </form>
        </div>
    )

}