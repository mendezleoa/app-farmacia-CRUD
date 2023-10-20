import { useState } from "react";

export default function Formulario() {

    const [state, setState] = useState({
        nombreprod: '',
        categoria: '',
        cantidad: '',
        precio: '',
        descripcion: '',
    });

    function handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState({
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submit")
        fetch('http://localhost:4000/items', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreprod: state.nombreprod,
                categoria: state.categoria,
                cantidad: state.cantidad,
                precio: state.precio,
                descripcion: state.descripcion
            })
        });
    }


    return (
        <div className="flex-none container mx-auto px-10 pt-2 pb-4 bg-teal-700 shadow hover:shadow-xl shadow-black rounded text-stone-100">
            <form onSubmit={handleSubmit}>
                <h1 className="mt-5 text-l font-bold">Agregar nuevo producto</h1>
                <div className="mb-2">
                    <label className="block mb-2 text-m font-medium text-gray-100">Nombre del Producto
                        <input type="text"
                            name="nombreprod"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Nombre del producto"
                            value={state.nombreprod}
                            onChange={handleInputChange}
                            required />

                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Categoria del Producto
                        <input type="text"
                            name="categoria"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Categoría"
                            value={state.categoria}
                            onChange={handleInputChange}
                            required />
                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Existencia del Producto
                        <input type="number"
                            name="cantidad"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Cantidad"
                            value={state.cantidad}
                            onChange={handleInputChange}
                            required />
                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Precio del Producto
                        <input type="number"
                            name="precio"
                            id="precio"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Precio"
                            value={state.precio}
                            onChange={handleInputChange}
                            required />
                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Descripción del Producto
                        <input type="text"
                            name="descripcion"
                            className="mb-5 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Descripción"
                            value={state.descripcion}
                            onChange={handleInputChange} />
                    </label>
                </div>
                <input type="submit"
                value="Enviar"
                className="rounded bg-green-600 px-4 py-2 cursor-pointer" />
            </form>
        </div>
    )

}