import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.svg'
import { NavbarLinks } from '../data/navbar-links';
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../reducers/slices/profileSlice';
import { useEffect, useState } from 'react';
import LogoutModal from './LogoutModal';
import { getAllCategories } from '../services/operations/coursesApi';
import BoldText from './BoldText';

let Navbar = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    
    let token = useSelector((state) => state.profile.token)

    const [category, setCategory] = useState([])
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        dispatch(getAllCategories(token, setCategory))
    }, [dispatch, token])

    const logoutHandler = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('currentStage')
        dispatch(setToken(null))
        navigate('/')
    }

    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => {
        setIsOpen(false)
    }
    
    const onYes = () => {
        logoutHandler()
        setIsOpen(false)
    }
    

    return (
        <div className="w-full max-h-[100px]">
            <nav className='flex justify-between p-4 md:p-6 bg-[#161D29] items-center relative w-full'>
                <a href='/' className='flex-shrink-0'>
                    {/* <img src={logo} alt="logo" className='w-[140px] md:w-[12vw]'/> */}
                    <h1 className='font-black text-2xl'>CODE CRATE</h1>
                </a>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex items-center justify-center w-10 h-10'>
                    <button 
                        className='text-white text-2xl focus:outline-none'
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:block'>
                    <ul className='text-white flex gap-8'>
                        {NavbarLinks.map((item, index) => {
                            return (
                                item.title === 'Catalog' ?
                                (<li className='cursor-pointer opacity-70 hover:opacity-100 group relative flex items-center gap-2'
                                key={index}>
                                    <button className="text-white">
                                        {item.title}
                                        <div className='absolute z-20 bg-white text-black h-fit w-fit whitespace-nowrap invisible group-hover:visible rounded-lg'>
                                            {category.map((item, index) => {
                                                return (<div key={index} className='px-10 py-2 hover:bg-[#F4F4F4] rounded-lg text-left'
                                                onClick={() => {
                                                    navigate(`/catalog/${item?._id}?name=${item?.name}`)
                                                    setIsMobileMenuOpen(false)
                                                }}
                                                >{item?.name}</div>)
                                            })}
                                        </div>
                                    </button>
                                    <FaArrowAltCircleDown />
                                </li>) :
                                (<li className='cursor-pointer opacity-70 hover:opacity-100'
                                key={index}>
                                    <a href={`${item.path}`}>
                                        {item.title}
                                    </a>
                                </li>)
                            )
                        })}
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <div className='hidden md:flex text-white gap-4'>
                    {!token && (
                        <>
                            <button className='bg-[#111722] border border-[#ffffffa0] rounded-md px-4 py-2 hover:bg-[#ffffff20] hover:transition-colors'>
                                <NavLink to="/login">Login</NavLink>
                            </button>
                            <button className='bg-[#111722] border border-[#ffffffa0] rounded-md px-4 py-2 hover:bg-[#ffffff20] hover:transition-colors'>
                                <NavLink to="/signup">Sign Up</NavLink>
                            </button>
                        </>
                    )}
                    {token && (
                        <>
                            <button className='bg-[#111722] border border-[#ffffffa0] rounded-md px-4 py-2 hover:bg-[#ffffff20] hover:transition-colors'
                                onClick={() => setIsOpen(true)}>
                                Logout
                            </button>
                            <button className='bg-[#111722] border border-[#ffffffa0] rounded-md px-4 py-2 hover:bg-[#ffffff20] hover:transition-colors'
                                onClick={() => {
                                    navigate('/dashboard/')
                                }}>
                                Dashboard
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className='md:hidden fixed inset-0 bg-[#161D29] z-50 mt-[73px] overflow-y-auto' style={{ height: 'calc(100vh - 73px)' }}>
                        <ul className='text-white flex flex-col gap-4 p-6'>
                            {NavbarLinks.map((item, index) => {
                                return (
                                    item.title === 'Catalog' ?
                                    (<li className='cursor-pointer opacity-70 hover:opacity-100'
                                    key={index}>
                                        <div className='flex flex-col gap-2'>
                                            <div className='flex items-center justify-center gap-2'>
                                                {item.title}
                                                <FaArrowAltCircleDown />
                                            </div>
                                            <div className='bg-[#111722] rounded-lg mt-2'>
                                                {category.map((item, index) => {
                                                    return (<div key={index} className='px-4 py-2 hover:bg-[#ffffff20] rounded-lg'
                                                    onClick={() => {
                                                        navigate(`/catalog/${item?._id}?name=${item?.name}`)
                                                        setIsMobileMenuOpen(false)
                                                    }}
                                                    >{item?.name}</div>)
                                                })}
                                            </div>
                                        </div>
                                    </li>) :
                                    (<li className='cursor-pointer opacity-70 hover:opacity-100'
                                    key={index}
                                    onClick={() => setIsMobileMenuOpen(false)}>
                                        <a href={`${item.path}`}>
                                            {item.title}
                                        </a>
                                    </li>)
                                )
                            })}
                        </ul>
                        <div className='flex flex-col gap-4 p-6 border-t border-[#ffffff20] bg-[#161D29] sticky bottom-0'>
                            {!token && (
                                <>
                                    <button className='bg-[#111722] border border-[#ffffffa0] rounded-md px-4 py-2 hover:bg-[#ffffff20] hover:transition-colors w-full text-white'
                                        onClick={() => setIsMobileMenuOpen(false)}>
                                        <NavLink to="/login">Login</NavLink>
                                    </button>
                                    <button className='bg-[#111722] border border-[#ffffffa0] rounded-md px-4 py-2 hover:bg-[#ffffff20] hover:transition-colors w-full text-white'
                                        onClick={() => setIsMobileMenuOpen(false)}>
                                        <NavLink to="/signup">Sign Up</NavLink>
                                    </button>
                                </>
                            )}
                            {token && (
                                <>
                                    <button className='bg-[#111722] border border-[#ffffffa0] rounded-md px-4 py-2 hover:bg-[#ffffff20] hover:transition-colors w-full text-white'
                                        onClick={() => {
                                            setIsOpen(true)
                                            setIsMobileMenuOpen(false)
                                        }}>
                                        Logout
                                    </button>
                                    <button className='bg-[#111722] border border-[#ffffffa0] rounded-md px-4 py-2 hover:bg-[#ffffff20] hover:transition-colors w-full text-white'
                                        onClick={() => {
                                            navigate('/dashboard/')
                                            setIsMobileMenuOpen(false)
                                        }}>
                                        Dashboard
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </nav>
            <LogoutModal isModalOpen={isOpen} onClose={onClose} onYes={onYes} />
        </div>
    );
}

export default Navbar
