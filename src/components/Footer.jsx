import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { toastMessage } from "../helpers/general";
import IconCV from "../assets/images/icon-cv.jpg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#111111] p-8 gap-10">
      <div className="flex items-center gap-8">
        <img
          width={50}
          height={100}
          className="rounded-full"
          src={IconCV}
          alt="Referencia CV"
          decoding="async"
        />
        <p className="text-[#FAFAFA] text-xs sm:text-sm">
          Ingeniero en Sistemas y Desarrollador Backend, Perú
        </p>
      </div>
      <div className="w-[100%] flex justify-between items-center gap-5 sm:px-10">
        <div className="grid grid-rows-2 grid-flow-col items-center gap-5">
          <Link to="/about" className="text-[#FAFAFA] text-xs sm:text-sm">
            Acerca de mi
          </Link>
          <Link to="#" className="text-[#FAFAFA] text-xs sm:text-sm">
            Contacto
          </Link>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex justify-center items-center">
            <div
              onClick={() => toastMessage("Proximamente...!", 2)}
              className="border rounded-full bg-white p-2 cursor-pointer hover:opacity-60 transition-all duration-500 ease-in-outa"
            >
              <BsGithub color="black" size="18px" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/adrian-gonzales-espinola",
                  "_blank"
                )
              }
              className="border rounded-full bg-white p-2 cursor-pointer hover:opacity-60 transition-all duration-500 ease-in-out"
            >
              <ImLinkedin color="#0D60A8" size="18px" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
