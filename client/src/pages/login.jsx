import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function LoginPage() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm();
    const { signin, errors: signinErrors } = useAuth();

    const onSubmit = handleSubmit(async (values) => {
        signin(values);
        navigate('/prods');
    });

    return (
        <>
            <Navbar />
            <div className='mb-14'>
                <h1 className='text-5xl mt-12 mb-10 tracking-widest italic font-bold'>Farmacia JS</h1>
                <section className='mx-4 mt-2 tracking-wider'>
                    <div className="flex-none container max-w-xl mx-auto px-10 pt-2 pb-4 bg-cyan-700 shadow shadow-black rounded-xl text-stone-900">
                        {
                            signinErrors.map ((error, i) => {
                                <div className="text-red-500">
                                    {error.message}
                                </div>
                            }
                            )
                        }
                        <h3 className='my-3 text-stone-100 text-2xl font-bold'>Ingresa con tu usuario para usar el sistema.</h3>
                        <h4 className='my-2 text-stone-100 text-lg'>Rellena los datos de tu usuario en los campos inferiores.</h4>
                        <form className='mx-12 my-6' onSubmit={onSubmit}>
                            <div className='flex items-center my-4'>
                                <i className="fa-solid fa-envelope p-2"></i>
                                <input type="email" placeholder='Email' className='bg-white border border-gray-800 w-full py-1 px-3 rounded-md' {...register("email", { required: true })} />
                                {errors.email && <p className='text-stone-100 text-sm text-'>Se necesita el Nombre</p>}
                            </div>
                            <div className='flex items-center my-4'>
                                <i className="fa-solid fa-lock p-2"></i>
                                <input type="password" placeholder='Contraseña' className='bg-white border border-gray-800 w-full py-1 px-3 rounded-md' {...register("password", { required: true })} />
                                {errors.password && <p className='text-stone-100 text-sm text-'>Se necesita el Nombre</p>}
                            </div>
                            <button type="submit" className='bg-blue-400 text-sm text-white my-4 px-5 py-1.5 rounded-md'>Ingresa</button>
                        </form>
                        <h4 className='my-2 text-stone-100 text-lg'>Si no tienes una cuenta haz click <Link to='/register' className='text-green-400 font-semibold' >AQUÍ</Link>.</h4>
                    </div>
                </section>
            </div>
            <footer className='fixed bottom-0 left-0 z-20 w-full bg-sky-800 p-2 flex'>
                <p className='ml-2 italic text-xl text-gray-100 sm:text-center'>© FARMACIA JS S.A. | todos los derechos reservados</p>
            </footer>
        </>
    )
}

export default LoginPage