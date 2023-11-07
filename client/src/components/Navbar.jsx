import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const { isAutenticated, logout} = useAuth();
    return (
        <nav className='fixed top-0 left-0 z-20 w-full bg-sky-800 mb-4 flex justify-between py-5 px-10'>
            <ul className='flex fustify-between gab-x-2'>
                {isAutenticated? (
                    <>
                        <li>
                            <Link className='text-stone-100 mr-4' to='/prods'>Listado de Productos</Link>
                        </li>
                        <li>
                            <Link className='text-stone-100' to='/' onClick={() => {
                                logout();
                            }}>Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link className='text-stone-100 mr-4' to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link className='text-stone-100' to='/register'>Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar