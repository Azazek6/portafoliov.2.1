import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { toastMessage } from "../helpers/general";

const Header = () => {
  return (
    <nav className="w-[100%] flex flex-row justify-between sm:justify-normal items-center gap-10 px-8 sm:px-16 py-5">
      <NavLink
        to="/"
        className="text-[#292828] text-3xl sm:text-2xl font-semibold"
      >
        Adrian
      </NavLink>
      <div className="w-[100%] hidden sm:flex flex-row justify-between items-center gap-0 pt-1">
        <div className="w-[100%] flex justify-between sm:justify-normal items-center gap-5">
          <NavLink
            to="/about"
            className="text-[#292828] text-base font-normal underline"
          >
            Mi Perfil
          </NavLink>
          <NavLink
            to="/"
            className="text-[#292828] text-sm sm:text-base font-normal underline"
          >
            Contacto
          </NavLink>
        </div>
        <div className="w-[100%] sm:w-auto flex">
          <NavLink
            to="#"
            className="w-[100%] sm:w-auto text-[#292828] text-center sm:text-start text-xs sm:text-sm font-normal border border-[#82807E] py-2 px-6 rounded-full hover:bg-[#292828] hover:text-white transition-all duration-500 ease-in-out"
            onClick={() => toastMessage("En construcción...!", 2)}
          >
            Proyectos
          </NavLink>
        </div>
      </div>
      <div className="flex sm:hidden items-center">
        <GiHamburgerMenu className="text-[#292828] text-3xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Header;
