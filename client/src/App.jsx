import './App.css';
import Tablas from './tablas.jsx';
import Formulario from './formulario.jsx';

function App() {
  return (
    <>
      <div>
        <h1 className='text-5xl mt-5 mb-10 tracking-widest italic font-bold'>Farmacia JS</h1>
        <section className='mx-4 mt-2 tracking-wider'>
          <Tablas/>
          <Formulario/>
        </section>
      </div>
    </>
  )
}

export default App
