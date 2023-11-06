import Tablas from '../tablas.jsx';
import Formulario from '../formulario.jsx';

function HomePage() {
    return (
        <>
            <div className='mb-14'>
                <h1 className='text-5xl mt-5 mb-10 tracking-widest italic font-bold'>Farmacia JS</h1>
                <section className='mx-4 mt-2 tracking-wider'>
                    <Tablas/>
                    <Formulario/>
                </section>
            </div>
            <footer className='fixed bottom-0 left-0 z-20 w-full bg-green-900 p-2 flex'>
                <p className='ml-2 italic text-xl text-gray-100 sm:text-center'>© FARMACIA JS S.A. | todos los derechos reservados</p>
            </footer>
        </>
    )
};

export default HomePage