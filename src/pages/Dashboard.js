import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import DashboardNavbar from "../components/DashboardNavbar";

const Dashboard = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { token } = useSelector((state) => state.profile);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    const isViewCoursePage = location.pathname.includes('/view-course/');

    return (
        <div className="bg-richblack-900 max-h-[calc(100vh-100px)] text-white flex relative overflow-hidden">
            <DashboardNavbar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Mobile Header */}
                <div className="md:hidden h-16 flex-shrink-0 flex items-center justify-end px-4 bg-[#161D29] sticky top-0 z-10">
                    <button onClick={toggleMobileMenu} className="text-white text-2xl p-2 focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto">
                    <div className={isViewCoursePage ? '' : 'py-0 px-0 md:px-0'}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard