import Dialog from './dialog.js'
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <p className='text-3xl font-bold underline'>
          Farmacia app
        </p>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700 bg-amber-600"
        >Hola mundo</button>
      </header>
      <Dialog/>
    </div>
  );
}

export default App;
