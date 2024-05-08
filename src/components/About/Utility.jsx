import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import Spinner from "../Spinner";

const Utility = () => {
  const [loadCV, setLoadCV] = useState(false);
  const cv_path = new URL(
    "../../assets/documents/CV_Gonzales_Espinola_Adrian_J.pdf",
    import.meta.url
  ).pathname;

  const downloadCV = () => {
    setLoadCV(true);
    // Creamos un elemento de enlace
    const link = document.createElement("a");
    // Establecemos la ruta del archivo
    link.href = cv_path;
    // Establecemos el atributo de descarga con el nombre deseado del archivo
    link.download = "CV_Gonzales_Espinola_Adrian_J.pdf";
    // Ocultamos el enlace
    link.style.display = "none";
    // Añadimos el enlace al cuerpo del documento
    document.body.appendChild(link);
    // Simulamos un clic en el enlace
    link.click();
    // Eliminamos el enlace del cuerpo del documento
    document.body.removeChild(link);
    setLoadCV(false);
  };
  return (
    <section className="m-[0_auto] w-[95%] sm:w-[50%] mt-5 sm:mb-10">
      <h1 className="text-[#292828] text-lg sm:text-3xl underline font-semibold tracking-wide">
        Utilidades
      </h1>
      <div className="w-[100%] flex flex-col sm:flex-row items-center mt-6 px-1 gap-4">
        <button className="w-[100%] sm:w-auto flex justify-center items-center gap-2 py-2 px-4 bg-[#111111] text-[#FFFFFF] text-xs sm:text-sm font-medium rounded-full border border-[#0000] hover:border-[#82807E] hover:bg-[#FFFF] hover:text-[#111111] transition-all duration-500 ease-in-out">
          <BsDownload size={20} />
          T&iacute;tulo Profesional
        </button>
        <button
          onClick={downloadCV}
          className="w-[100%] sm:w-auto flex justify-center items-center gap-2 py-2 px-4 bg-[#111111] text-[#FFFFFF] text-xs sm:text-sm font-medium rounded-full border border-[#0000] hover:border-[#82807E] hover:bg-[#FFFF] hover:text-[#111111] transition-all duration-500 ease-in-out"
        >
          {loadCV ? <Spinner /> : <BsDownload size={20} />}
          CV Original
        </button>
      </div>
    </section>
  );
};

export default Utility;
