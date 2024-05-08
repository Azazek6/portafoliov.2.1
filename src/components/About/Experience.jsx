import React from "react";
import { BiRightArrow } from "react-icons/bi";

const Experience = () => {
  return (
    <section className="m-[0_auto] w-[95%] sm:w-[50%] mt-5">
      <h1 className="text-[#292828] text-lg sm:text-3xl underline font-semibold tracking-wide">
        Experiencia
      </h1>

      <div className="w-[100%] text-[#292828] flex items-center gap-2 my-3">
        <h3 className="font-semibold text-xs sm:text-base tracking-wide">
          TMONEY
        </h3>
        <span>|</span>
        <p className="text-xs sm:text-sm tracking-wide">
          Desarrollador Backend <b>(2023 - Actualidad)</b>
        </p>
      </div>

      <div className="flex items-center divide-x divide-black mb-4">
        <div className="w-[5%]"></div>
        <div className="pl-2 w-[95%] flex flex-col gap-5">
          <div className="text-[#292828] flex items-center gap-5">
            <BiRightArrow size={13} />
            <p className="w-[100%] tracking-wide text-xs sm:text-sm">
              Encargado del mantenimiento integral de servidores para garantizar
              un rendimiento óptimo y la disponibilidad constante de los
              sistemas.
            </p>
          </div>
          <div className="text-[#292828] flex items-center gap-5">
            <BiRightArrow size={13} />
            <p className="w-[100%] tracking-wide text-xs sm:text-sm">
              Responsable del despliegue eficiente de aplicaciones y API's.
            </p>
          </div>
          <div className="text-[#292828] flex items-center gap-5">
            <BiRightArrow size={13} />
            <p className="w-[100%] tracking-wide text-xs sm:text-sm">
              Especializado en la integración de nuevas funcionalidades para
              mejorar la eficiencia y la usabilidad de las aplicaciones y
              sistemas.
            </p>
          </div>
          <div className="text-[#292828] flex items-center gap-5">
            <BiRightArrow size={13} />
            <p className="w-[100%] tracking-wide text-xs sm:text-sm">
              Participación activa en el desarrollo y mantenimiento de API's.
            </p>
          </div>
          <div className="text-[#292828] flex items-center gap-5">
            <BiRightArrow size={13} />
            <p className="w-[100%] tracking-wide text-xs sm:text-sm">
              Experiencia destacada en la conexión efectiva de API's al frontend
              utilizando tecnologías como React y Next.js.
            </p>
          </div>
          <div className="text-[#292828] flex items-center gap-5">
            <BiRightArrow size={13} />
            <p className="w-[100%] tracking-wide text-xs sm:text-sm">
              Competente en la maquetación frontend para crear interfaces
              atractivas y funcionales que mejoren la experiencia del usuario.
            </p>
          </div>
          <div className="text-[#292828] flex items-center gap-5">
            <BiRightArrow size={13} />
            <p className="w-[100%] tracking-wide text-xs sm:text-sm">
              Encargado del mantenimiento y despliegue eficiente de bases de
              datos.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] text-[#292828] flex items-center gap-2 my-3">
        <h3 className="font-semibold text-xs sm:text-base tracking-wide">
          COMPUTEC
        </h3>
        <span>|</span>
        <p className="text-xs sm:text-sm tracking-wide">
          Soporte Técnico <b>(2022 - 2023)</b>
        </p>
      </div>

      <div className="flex items-center divide-x divide-black mb-4">
        <div className="w-[5%]"></div>
        <div className="pl-2 w-[95%] flex flex-col gap-5">
          <div className="text-[#292828] flex items-center gap-5">
            <BiRightArrow size={13} />
            <p className="w-[100%] tracking-wide text-xs sm:text-sm">
              Mantenimiento de computadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
