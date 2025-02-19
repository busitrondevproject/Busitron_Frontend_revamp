import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideNavigation from "./Navigation/SideNavigation";

const Dashboard = () => {
    const [activeTab, setActiveTab] = React.useState("");
    const location = useLocation();

    React.useEffect(() => {
        const currentPath = location.pathname;

        setActiveTab(currentPath);
    }, []);

    return (
        <div className=" flex h-screen">
            <SideNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="border w-full">
                <div className="max-h-[100px] py-7 bg-white">Dashboard</div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
