import { useForm } from 'react-hook-form';
import { useProds } from "./context/ProdsContext";

export default function Formulario() {

    const { register, handleSubmit } = useForm();
    const { createProd } = useProds();

    const onsubmit = handleSubmit((data) => {
        createProd(data)
    });

    return (
        <div className="flex-none container max-w-xl mx-auto px-10 pt-2 pb-4 bg-sky-800 shadow hover:shadow-xl shadow-black rounded text-stone-100">
            <form onSubmit={onsubmit}>
                <h1 className="mt-5 text-l font-bold">Agregar nuevo producto</h1>
                <div className="mb-2">
                    <label className="block mb-2 text-m font-medium text-gray-100">Nombre del Producto
                        <input type="text"
                            name="nombreprod"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Nombre del producto"
                            {... register("nombreprod", { required: true })} />

                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Categoria del Producto
                        <input type="text"
                            name="categoria"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Categoría"
                            {... register("categoria", { required: true })} />
                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Existencia del Producto
                        <input type="number"
                            name="cantidad"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Cantidad"
                            {... register("cantidad", { required: true, defaultValue: 1 })} />
                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Precio del Producto
                        <input type="number"
                            name="precio"
                            id="precio"
                            className="mb-2 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Precio"
                            {... register("precio", { required: true, defaultValue: 1 })} />
                    </label>
                    <label className="block mb-2 text-m font-medium text-gray-100">Descripción del Producto
                        <input type="text"
                            name="descripcion"
                            rows="2"
                            className="mb-5 bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500"
                            placeholder="Descripción"
                            {... register("descripcion", { defaultValue: 'n/a' })} />
                    </label>
                </div>
                <input type="submit"
                value="Enviar"
                className="rounded bg-green-600 px-4 py-2 cursor-pointer" />
            </form>
        </div>
    )

}