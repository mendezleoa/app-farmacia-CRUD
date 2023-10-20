function Formulario() {
    return (
        <div className="flex-none container mx-auto px-10 pt-2 pb-4 bg-teal-700 shadow hover:shadow-xl shadow-black rounded text-stone-100">
            <h2 className="text-l font-bold">Agregar nuevo producto</h2>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-100">First name</label>
                <input type="text" id="first_name" className="bg-gray-800 border border-black ring-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5 focus:border-gray-500 focus:ring-gray-500" placeholder="Nombre del producto" required></input>
            </div>
        </div>
    )
}

export default Formulario