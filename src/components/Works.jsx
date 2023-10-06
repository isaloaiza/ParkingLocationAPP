import React from "react";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          Paqueaderos de la region del quindio
        </h1>
        <p className="text-xl text-gray-500">
          Parkinglocation brindando utilidad y mejor camino los turistas para que conozcan los parquederos y la cuidad.
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="barqueadero lambao.jpg"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          <p className="text-gray-500">James Alzate - Junio, 2022</p>
          <h3 className="text-2xl font-bold">App Redesign</h3>
          <p className="text-gray-500">
           Dueño del "parquedero lambao" en la cuidad de armenis, 20 años en laborando, brindadndo seguridad, responsabilidad y compromiso en sus clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="motoP.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Parquedero Sena - Agosto 15, 2023</p>
            <h3 className="text-2xl font-bold">
              Parquedero Sena 
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="parque.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Paquedero Venta - Mayo 03, 2023</p>
            <h3 className="text-2xl font-bold">
              Parqueadero la 13 
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="quimbayaplaza.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Nueva Implementacion - Septiempre, 2023</p>
            <h3 className="text-2xl font-bold">
              Parquedero Quimbaya
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="unicentro.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Centro comercial unicentro- Julio 20, 2023</p>
            <h3 className="text-2xl font-bold">
              Parquedero Unicentro
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
