import React from "react";

const Education = () => {
  return (
    <section className="m-[0_auto] w-[95%] sm:w-[50%] mt-5">
      <h1 className="text-[#292828] text-lg sm:text-3xl underline font-semibold tracking-wide">
        Educaci&oacute;n
      </h1>

      <div className="w-[100%] text-[#292828] flex items-center gap-2 my-3">
        <h3 className="font-semibold text-xs sm:text-base tracking-wide">
          Universidad C&eacute;sar Vallejo
        </h3>
        <span>|</span>
        <p className="text-xs sm:text-sm tracking-wide">
          Ingeniero de Sistemas <b>(2017 - 2023)</b>
        </p>
      </div>
    </section>
  );
};

export default Education;
