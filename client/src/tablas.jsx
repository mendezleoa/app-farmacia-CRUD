import { useFetch } from "./useFetch";

function Tablas() {
    const { data, loading } = useFetch('http://localhost:4000/items');

    return (
        <div className="border border-solid my-3 p-1 rounded-sm">
            <ul className="flex flex-wrap justify-center text-justify">
                {loading && <li className="text-sm font-semibold">Cargando...</li>}
                {data?.map((prod) => (
                    <li key={prod._id} className="basis-1/3 p-4 bg-green-900 transition ease-in-out delay-150 hover:-translate-y-2 hover:-translate-x-1 hover:scale-220 duration-300 m-2 rounded-md shadow-lg">
                        <h3 className="text-base">{prod.nombreprod}</h3>
                        <p className="text-sm">{prod.categoria}</p>
                        <p className="text-xs">{prod.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tablas;
