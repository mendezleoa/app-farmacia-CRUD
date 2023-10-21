import './App.css';
import Tablas from './tablas.jsx';
import Formulario from './formulario.jsx';

function App() {
  return (
    <>
      <div className='mb-14'>
        <h1 className='text-5xl mt-5 mb-10 tracking-widest italic font-bold'>Farmacia JS</h1>
        <section className='mx-4 mt-2 tracking-wider'>
          <Tablas/>
          <Formulario/>
        </section>
      </div>
      <footer className='fixed bottom-0 left-0 z-20 w-full bg-green-900 p-2'>
        <p className='italic text-xl text-white sm:text-center'>© FARMACIA JS S.A. | todos los derechos reservados</p>
        <a href="#" className="mr-4 hover:underline md:mr-7">About Us</a>
      </footer>
    </>
  )
}

export default App
