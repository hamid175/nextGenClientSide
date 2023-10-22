import React, { useState } from "react";
import sidebarLogo from "../../../assets/sidebarLogo.png";
import { Link, useLocation } from "react-router-dom";


const initial = [
  {
    path: "/admin/dashboard",
    menuName: "Dashboard",
  },
  {
    path: "/admin/reports",
    menuName: "Survey Reports",
  },
];

const Sidebar = () => {
  const [menuList, setMenuList] = useState(initial);

  const location = useLocation();


  return (
    <div className="sidebar vh-100">
      <div className="w-100 d-flex flex-column justify-content-center align-items-center py-5">
        <img
          className="mt-4 mb-4"
          src={sidebarLogo}
          width={"107px"}
          height={"167px"}
          alt=""
        />
      </div>
      {/* Sidebar menu */}
      <div className="px-4 text-white">
        <h6 className="menu-tag font-weight-bold mb-2 ">MENU</h6>
        <ul className="m-0 p-0 ">
          {menuList?.map((item, idx) => (
            <li key={idx} className={`list-unstyled menu-item pb-1 ${location?.pathname === item?.path && 'activMenu' }`}>
              <Link to={item?.path} className={`text-decoration-none `}>{item?.menuName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
