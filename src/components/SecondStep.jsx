import React, { useState } from 'react';
import useForm from '../hooks/useForm';

export default function SecondStep({ goNext }) {
  const { values, setValues, handleSubmit, handleChange } = useForm();

  const [type, setType] = useState('password');

  function showPassword() {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  }

  return (
    <div className="flex flex-col items-start justify-center h-screen px-20 pb-32">
      <div className="">
        <h1 className="text-4xl font-bold p-2">
          Registra tu cuenta individual
        </h1>
        <h2 className="text-2xl p-2">
          Para poder revisar que se trata de una cuenta real, necesitamos la
          siguiente infirmacion
        </h2>
      </div>
      <form className="items-center" onSubmit={handleSubmit}>
        <label className="mt-3">
          Nombre completo*
          <input
            className="w-full py-3 px-4 my-2 border rounded text-left"
            type="fullname"
            name="fullname"
            placeholder="Nestor Lopez Lopez"
            onChange={handleChange}
            autoComplete="full-name"
            required
          />
        </label>
        <label className="mt-3">
          Correo Electronico*
          <input
            className="w-full py-3 px-4 my-2 border rounded text-left"
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>
        <label className="mt-3">Contraseña*</label>
        <div className="w-full">
          <div className="absolute right-32 flex items-center px-2 py-4">
            <input className="hidden" type="checkbox" onChange={showPassword} />
            <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer ">
              show
            </label>
          </div>
          <input
            className="w-full py-3 px-4 my-2 border rounded text-left"
            type={type}
            name="password"
            placeholder="Your password"
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
          <input
            className="my-2"
            type="checkbox"
            name="acceptance"
            onChange={handleChange}
            required
          />
          <label className="pl-2">Acepto los terminos y condiciones</label>
        </div>
        <button
          type="submit"
          className="h-auto min-w-min w-full py-7 px-4 my-2 border rounded text-left bg-accentcolor"
        >
          <h3 className="text-xl text-center text-white">Registrar Cuenta</h3>
        </button>
      </form>
    </div>
  );
}
