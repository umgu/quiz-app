import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { sideBarData } from "./sidebar-data";
import './sidebar.css';

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        // <div className="sidebar-container" >
            <div className="link_container">
                <div className="link-header">
                    <NavLink to="/">
                        <div className="p-1 logo_container w-100" onClick={() => { setShowMenu(false) }}>
                            <img
                                className="p-2 img_container"
                                src={require("../../static/images/net_smartz_logo.png")}
                                alt="logo"
                            />
                        </div>
                    </NavLink>

                    <div className="hamburger_menu_icon me-4" onClick={() => { setShowMenu(!showMenu) }}>
                        <i className="icon_color fa-sharp fa-solid fa-bars"></i>
                    </div>
                </div>

                <div className="List_container" onClick={() => { setShowMenu(!showMenu) }}>
                    <ul className={showMenu ? "show_mobile_view" : "hide_mobile_view"}>
                        {sideBarData.map((val, key) => {
                            return (
                                <li key={key}>
                                    <NavLink
                                        children={({ isActive }) => {
                                            const file = isActive ? "active" : "default";
                                            return (
                                                <>
                                                    <i className={`${file}  ${val.icon}`}></i>
                                                    {val.title}
                                                </>
                                            );
                                        }}
                                        className={({ isActive }) =>
                                            isActive ? "active" : "inactive"
                                        }
                                        to={val.src}
                                    ></NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        // </div >
    );
};
export default Sidebar;
