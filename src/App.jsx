import React from 'react';
import { Form } from './components';

function App() {
  return (
    <>
      <div className="flex flex-row overflow-hidden h-screen ">
        <div className="container flex flex-col justify-center items-center relative mx-auto max-w-screen-lg h-screen inset-y-0 left-0 bg-bgcolor">
          <img
            src="Background.png"
            alt="background"
            className="absolute object-cover w-full h-full opacity-10 z-0"
          />
          <div className="h-full z-10">
            <header className="pt-10 w-full z-10 px-28">
              <img
                src="logo.png"
                alt="Logo"
                className="inline-block w-16 h-16"
              />
              <h1 className="inline-block align-middle text-3xl text-white left-20 pl-2">
                Expanse
              </h1>
            </header>
            <div className="container flex flex-col pt-96 px-10">
              <img
                src="“.png"
                alt="colons"
                className="self-start px-20 pb-16"
              />
              <p className="text-2xl text-white px-20">
                Nuwe es la plataforma que convierte el desarrollo profesional,
                la busqueda de trabajo y las conexiones de personas y empresas
                en un juego. Haciendo que puedas centrarte en lo que te gusta,
                programar, diseñar, create, planear...
              </p>
              <img
                src="Vector 2.png"
                alt="arrow"
                className="self-end pr-24 pt-16"
              />
            </div>
          </div>
        </div>
        <div className="container p-12">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
