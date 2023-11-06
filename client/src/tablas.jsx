import { useFetch } from "./useFetch";

function Tablas() {
    const { data, loading } = useFetch('http://localhost:4000/items');

    const eliminar = (key) => {
        console.log(key);
        fetch(`http://localhost:4000/items/?id=${key}`, {
            method: 'DELETE'});
    }

    return (
        <div className="my-3 p-1 rounded-sm">
            <ul className="flex flex-wrap justify-center text-justify">
                {loading && <li className="text-sm font-semibold">Cargando...</li>}
                {data?.map((prod) => (
                    <li key={prod._id} className="basis-1/3 p-4 min-w-[12rem] max-w-[20rem] bg-green-900 transition ease-in-out delay-150 hover:-translate-y-2 hover:-translate-x-1 hover:scale-220 duration-300 m-2 rounded-md shadow-lg">
                        <h3 className="text-base">Nombre: {prod.nombreprod}</h3>
                        <p className="text-sm">Categoría: {prod.categoria}</p>
                        <p className="text-sm">Precio: {prod.precio}$</p>
                        <p className="text-sm">Cantidad: {prod.cantidad}</p>
                        <p className="text-xs">Descripción: {prod.descripcion}</p>
                        <button className="text-l px-4 py-2 rounded bg-red-600" id={prod._id} onClick={(e) =>{ eliminar(e.target.id)}}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tablas;
