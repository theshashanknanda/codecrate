import React, { useState } from 'react';
import { sidebarLinks } from '../data/dashboard-links';
import { useDispatch, useSelector } from 'react-redux';
import * as FaIcons from 'react-icons/vsc';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal';
import { setToken } from '../reducers/slices/profileSlice';

const DashboardNavbar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useSelector((state) => state.profile);
    const userType = user?.accountType;


    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    const studentItems = sidebarLinks.filter((item) => item.type === 'student' || item.type === 'both');
    const instructorItems = sidebarLinks.filter((item) => item.type === 'instructor' || item.type === 'both');

    const matchRoute = (route) => location.pathname.includes(route);

    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('currentStage');
        dispatch(setToken(null));
        setIsLogoutModalOpen(false);
        navigate('/');
    };



    const renderMenuItems = (items) => {
        return items.map((item) => {
            const Icon = FaIcons[item.icon];
            const isActive = matchRoute(item.path);

            const linkClass = `flex items-center justify-start gap-2 py-3 md:py-4 px-4 md:px-8 cursor-pointer hover:opacity-70 ${
                isActive ? 'text-yellow-400 bg-[#3D2A01] border-l-2 border-yellow-600' : 'text-[#b4b8c1]'
            }`;

            if (item.id === 7) { // Logout Button
                return (
                    <button
                        key={item.id}
                        className={linkClass}
                        onClick={() => {
                            setIsLogoutModalOpen(true);
                            if (isMobileMenuOpen) toggleMobileMenu();
                        }}
                    >
                        {Icon && <Icon className='w-[20px] h-[20px]' />}
                        <span className='text-sm md:text-base'>{item.name}</span>
                    </button>
                );
            }

            return (
                <a key={item.id} href={item.path} className={linkClass} onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
                    {Icon && <Icon className='w-[20px] h-[20px]' />}
                    <span className='text-sm md:text-base'>{item.name}</span>
                </a>
            );
        });
    };

    return (
        <>
            {/* Overlay for mobile menu */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 md:hidden ${
                    isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={toggleMobileMenu}
            ></div>

            {/* Sidebar */}
            <div
                className={`bg-[#161D29] fixed md:static inset-y-0 left-0 z-30 w-64 md:h-screen transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="h-full flex flex-col overflow-y-auto">
                    <nav className="flex-1 flex flex-col py-2">
                        {userType === 'Instructor' ? renderMenuItems(instructorItems) : renderMenuItems(studentItems)}
                    </nav>
                </div>
            </div>

            <LogoutModal
                isModalOpen={isLogoutModalOpen}
                onClose={() => setIsLogoutModalOpen(false)}
                onYes={logoutHandler}
            />
        </>
    );
};

export default DashboardNavbar;
