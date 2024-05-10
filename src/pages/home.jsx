import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import Layout from "../layouts/Layout";
import IconCV from "../assets/images/icon-cv.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="m-[0_auto] w-[80%] sm:w-[70%] gap-3 mt-10 sm:mt-24 mb-[15rem] md:mb-[23rem]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="lg:w-[50%]">
            <h1 className="text-[#292828] text-3xl sm:text-5xl font-bold">
              Hola, soy Adrian Gonzales Espinola
            </h1>
            <p className="text-[#292828] text-lg sm:text-2xl font-normal mt-5">
              Ingeniero de Sistemas y Desarrollador apasionado por la
              tecnolog&iacute;a, con experiencia en Node.js y MySQL en el
              backend, y habilidades en frontend usando JavaScript, React y
              Next.js. Siempre en busca de nuevos desaf&iacute;os y aprendizaje
              continuo.
            </p>
            <div className="flex flex-col gap-5 mt-5 pl-1">
              <div className="flex items-center gap-5">
                <TfiWorld className="cursor-pointer border border-[#777777] p-1 rounded-md text-2xl hover:bg-[#777777] text-[#82807E] hover:text-white transition-colors duration-500 ease-in-out" />
                <span className="text-[#82807E] text-sm sm:text-lg">
                  La libertad - Trujillo, Per&uacute;
                </span>
              </div>
              <div className="flex items-center gap-5">
                <MdOutlineEmail className="cursor-pointer border border-[#777777] p-1 rounded-md text-2xl hover:bg-[#777777] text-[#82807E] hover:text-white transition-colors duration-500 ease-in-out" />
                <span className="text-[#82807E] text-sm sm:text-lg">
                  adrianespinolag12@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-5">
                <LuPhone className="cursor-pointer border border-[#777777] p-1 rounded-md text-2xl hover:bg-[#777777] text-[#82807E] hover:text-white transition-colors duration-500 ease-in-out" />
                <span className="text-[#82807E] text-sm sm:text-lg">
                  +51 968 703 924
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] hidden lg:flex justify-center items-center">
            <img
              width={100}
              height={100}
              src={IconCV}
              alt="Avatar"
              className="w-[50%] rounded-md border border-[#82807E]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
