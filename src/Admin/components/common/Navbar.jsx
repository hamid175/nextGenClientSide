import React from "react";
import { TbLogout } from 'react-icons/tb';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" py-3 px-4 d-flex justify-content-end">
      <div className="gap-5 d-inline-flex">
        {/* admin name */}
        <div className="pe-5">
            <h6 className="username m-0">Jalal Ghani</h6>
            <span className="user-role">Administrator</span>
        </div>
        {/* logout button */}
        <Link to={"/admin"} className="logout-btn d-flex align-items-center justify-content-center p-2 "><TbLogout className="text-danger" size={"22px"}  /></Link>
      </div>
    </div>
  );
};

export default Navbar;
