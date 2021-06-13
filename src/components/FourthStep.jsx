import React from 'react';

export default function FourthStep() {
  function updateType() {

  }
  return (
    <div className="flex flex-col items-start justify-center h-screen px-20 pb-32">
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
        >
          <span className="flex space-x-5 gap-4">
            <img
              src="Polygon 3-1.png"
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
              className="invisible hover:visible w-5"
            />
          </span>
        </button>
        <button
          type="button"
          className="h-auto min-w-min w-full py-7 px-4 my-2 border rounded text-left"
        >
          <span className="flex space-x-5 gap-4">
            <img
              src="Polygon 3.png"
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
              className="invisible hover:visible w-5"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
