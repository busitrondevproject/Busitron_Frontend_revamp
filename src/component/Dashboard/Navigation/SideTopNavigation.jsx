import React, { useRef, useState } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { InputSwitch } from "primereact/inputswitch";
import { useNavigate } from "react-router-dom";
const SideTopNAvigation = (props) => {
    const { ProfileData } = props;
    const navigate = useNavigate();
    const op = useRef(null);
    const [checked, setChecked] = useState(false);

    const handleOnLogout = () => {
        navigate("/");
    };
    const handleOnDarkMode = (e) => {
        console.log("darkmode");
        setChecked(e.value);
    };
    const handleOnEditProfile = () => {
        navigate("/dashboard/profile");
    };

    return (
        <div className="max-h-[100px]  h-[100px] ss  text-gray-900  border-b-1 border-gray-400">
            <div className="px-4 py-4">
                {/* <div className="px-4 py-4 flex  align-middle"> */}
                <h2 className="text-xl font-bold ">
                    Busitron
                    <i
                        className="pi pi-angle-down  hover:text-blue-600 cursor-pointer"
                        onClick={(e) => op.current.toggle(e)}
                    ></i>
                </h2>

                {/* </div> */}
                <p className="overflow-hidden">Mahesh vaka </p>
            </div>
            <OverlayPanel ref={op} showCloseIcon>
                <div>
                    <div
                        className="flex gap-2  items-center p-4 hover:bg-blue-400"
                        onClick={handleOnEditProfile}
                    >
                        <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            className="w-[40px] h-[40px]"
                        />
                        <div>
                            <h2 className="font-bold">{ProfileData.name}</h2>
                            <p>{ProfileData.designation}</p>
                        </div>
                        <i
                            className="pi pi-pen-to-square  hover:text-blue-600 cursor-pointer"
                            style={{ fontSize: "20px" }}
                        ></i>
                    </div>
                    <div
                        className="w-full flex gap-2  p-2 px-4    hover:bg-blue-400 hover:text-blue-900 text-gray-500 cursor-pointer"
                        onClick={() => navigate("/dashboard/users")}
                    >
                        <button
                            className={`w-full text-left font-semibold   transition duration-200 cursor-pointer`}
                        >
                            invite member
                        </button>
                        <i
                            className={`ml-3 pi pi-user-plus`}
                            style={{ fontSize: "20px" }}
                        ></i>
                    </div>
                    <div className=" group w-full flex gap-2  p-2 px-4 hover:bg-blue-400 hover:text-blue-900 text-gray-500">
                        <button
                            className={`w-full text-left  font-semibold group-hover:text-blue-900 text-gray-500 transition duration-200 cursor-pointer`}
                        >
                            Dark Mode
                        </button>
                        <InputSwitch
                            checked={checked}
                            onChange={handleOnDarkMode}
                            className="border-2 border-gray-600 rounded-full"
                        />
                    </div>
                    <div
                        className=" w-full flex gap-2  p-2  px-4 pb-5 text-gray-500 hover:text-blue-900  hover:bg-blue-400  cursor-pointer "
                        onClick={handleOnLogout}
                    >
                        <button
                            className={`w-full text-left   font-semibold transition duration-200 cursor-pointer`}
                        >
                            Logout
                        </button>
                        <i
                            className={`ml-3 pi pi-sign-out`}
                            style={{ fontSize: "20px" }}
                        ></i>
                    </div>
                </div>
            </OverlayPanel>
        </div>
    );
};
export default SideTopNAvigation;
