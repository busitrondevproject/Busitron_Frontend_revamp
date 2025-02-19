import { GetNavigationData } from "./NavigationConst";
import { Link } from "react-router-dom";
import SideTopNAvigation from "./SideTopNavigation";
const SideNavigation = ({ activeTab, setActiveTab }) => {
    const navData = GetNavigationData();
    const ProfileData = {
        name: "mahesh",
        designation: "Full Satck Developer",
    };
    return (
        <div className="w-1/5  text-cyan-50 bg-white flex flex-col justify-between h-full">
            <div>
                <SideTopNAvigation ProfileData={ProfileData} />
                <nav className="mt-4 text-cyan-50">
                    {navData.map((each, index) => (
                        <Link
                            key={index}
                            to={each.path}
                            className="block px-4 md:px-6 py-3"
                            onClick={() => setActiveTab(each.path)}
                        >
                            <button
                                className={`w-full text-left hover:text-blue-600 transition duration-200 border-r-3 cursor-pointer ${
                                    activeTab === each.path
                                        ? "text-blue-600 font-semibold border-r-3 border-blue-600"
                                        : "text-gray-500 font-medium border-white"
                                }`}
                            >
                                <i className={`mr-3 ${each.icon}`}></i>
                                {each.label}
                            </button>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="px-4 md:px-6 py-3">
                <Link to="/">
                    <button
                        className={`w-full text-left hover:text-blue-600 font-semibold text-gray-500 transition duration-200 cursor-pointer`}
                    >
                        <i className={`mr-3 pi pi-sign-out`}></i>
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default SideNavigation;
