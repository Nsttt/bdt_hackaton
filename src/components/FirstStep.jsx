import React from 'react';
import useForm from '../hooks/useForm';

export default function FirstStep({ goNext }) {
  const { handleSelect } = useForm();

  const handleEvent = async (name) => {
    await handleSelect(name);
    goNext()
  };

  return (
    <div className="flex flex-col items-start justify-center h-screen lg:px-20 lg:pb-32">
      <div className="">
        <h1 className="text-4xl font-bold p-2">¡Unete a la comunidad!</h1>
        <h2 className="text-2xl p-2">
          Para empezar, dinos que cuenta te gustaria <br /> abrir.
        </h2>
      </div>
      <div className="flex flex-col w-4/6 items-center">
        <button
          type="button"
          className="h-auto min-w-min w-full py-7 px-4 my-2 border rounded text-left"
          onClick={() => handleEvent('Developer')}
        >
          <span className="flex space-x-5 gap-4">
            <img
              src="Polygon.png"
              alt="developer button"
              className="object-scale-down"
            />
            <span className="flex flex-col">
              <h3 className="text-xl">Developers</h3>
              <p className="text-sm">
                Cuenta personas para entrar en el mundo dev
              </p>
            </span>
            <img
              src="right-arrow.svg"
              alt="button arrow"
              className="w-5"
            />
          </span>
        </button>
        <button
          type="button"
          className="h-auto min-w-min w-full py-7 px-4 my-2 border rounded text-left"
          onClick={() => handleEvent('Business')}
        >
          <span className="flex space-x-5 gap-4">
            <img
              src="Polygon_border.png"
              alt="developer button"
              className="object-scale-down"
            />
            <span className="flex flex-col">
              <h3 className="text-xl">Business</h3>
              <p className="text-sm">Tienes o perteneces a una compañia</p>
            </span>
            <img
              src="right-arrow.svg"
              alt="button arrow"
              className="w-5"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
