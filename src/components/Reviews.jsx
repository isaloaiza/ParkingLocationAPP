import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Nosotros 
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          un equipo de trabajo que lucha por alcanzar un objetivos en comun, 
          actuando sobre la base de la responsabilidad individual y mutua con 
          el fin de aprovechar las sinergias de las competencias adicionales 
          para trabajar juntos.
 
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img
            src="../public/martin.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
          <img
            src="../public/isabel.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="../public/Luisa.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          <img
            src="../public/mauricio.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="../public/tatiana.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Luisa Alonso</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            BackEnd
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
