import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { toastMessage } from "../helpers/general";

const Header = () => {
  return (
    <nav className="w-[100%] flex flex-row justify-between sm:justify-normal items-center gap-10 px-5 sm:px-16 py-5">
      <Link
        to="/"
        className="text-white hover:text-[#292828] bg-[#292828] hover:bg-white text-xl sm:text-2xl font-semibold border border-[#82807E] pt-1 pb-2 px-5 rounded-full transition-all duration-500 ease-in-out"
      >
        Adrian
      </Link>
      <div className="w-[100%] hidden sm:flex flex-row justify-between items-center gap-0 pt-1">
        <div className="w-[100%] flex justify-between sm:justify-normal items-center gap-5">
          <Link
            to="/about"
            className="text-[#292828] text-base font-normal underline"
          >
            Mi Perfil
          </Link>
          <Link
            to="/"
            className="text-[#292828] text-sm sm:text-base font-normal underline"
          >
            Contacto
          </Link>
        </div>
        <div className="w-[100%] sm:w-auto flex">
          <Link
            to="#"
            className="w-[100%] sm:w-auto text-[#292828] text-center sm:text-start text-xs sm:text-sm font-normal border border-[#82807E] py-2 px-6 rounded-full hover:bg-[#292828] hover:text-white transition-all duration-500 ease-in-out"
            onClick={() => toastMessage("En construcción...!", 2)}
          >
            Proyectos
          </Link>
        </div>
      </div>
      <div className="flex sm:hidden items-center">
        <GiHamburgerMenu className="text-[#292828] text-3xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Header;
