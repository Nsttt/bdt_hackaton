import React, { useEffect, useState } from 'react';
import { FirstStep, SecondStep, ThirdStep, FourthStep } from '.';

export default function Form() {
  const [step, setStep] = useState(0);
  const [stepName, setStepName] = useState('');
  const [userData, setUserData] = useState({
    type: '',
    fullname: '',
    email: '',
    password: '',
    acceptance: false,
    phone: '',
    address: '',
    country: '',
    keycard_number: '',
    keycard_code: '',
  });

  useEffect(() => {
    function getStepName() {
      switch (step) {
        default:
          return '';
        case 1:
          return 'Personal Info';
        case 2:
          return 'Localizacion';
        case 3:
          return 'Verificacion por tarjeta';
      }
    }
    const currentName = getStepName();
    setStepName(currentName);
  }, [step]);

  function goNextStep() {
    if (step === 4) return;
    setStep(() => step + 1);
  }

  function goBackOneStep() {
    if (step === 0) return;
    setStep(() => step - 1);
  }

  function updateData(type, newData) {
    setUserData((data) => ({ ...data, [type]: newData }));
    console.log(userData);
    goNextStep();
  }
  return (
    <>
      <div className="container flex justify-between">
        <div
          className={`flex align-middle justify-center ${
            step === 0 ? 'invisible' : 'block'
          }`}
        >
          <button type="button" onClick={goBackOneStep}>
            <img
              src="left-arrow.svg"
              alt="Go back"
              className="inline w-5 h-5"
            />
            <h2 className="inline tracking-wide text-base font-bold text-gray-500 leading-tight pl-2 align-middle">
              Volver
            </h2>
          </button>
        </div>
        <div className="items-end">
          {step === 0 ? (
            <div className="text-left">
              <h2 className="">
                Ya tienes cuenta ?{' '}
                <span className="text-accentcolor">
                  <a href="/">Inicia sesion</a>
                </span>
              </h2>
            </div>
          ) : (
            <div className="text-right">
              <h3 className="text-sm">Paso 0{step} / 03</h3>
              <h2 className="tracking-wide text-lg font-bold text-gray-500 leading-tight">
                {stepName}
              </h2>
            </div>
          )}
        </div>
      </div>
      {step === 0 && <FirstStep update={updateData} />}
      {step === 1 && <SecondStep data={userData} update={updateData} />}
      {step === 2 && <ThirdStep update={updateData} />}
      {step === 3 && <FourthStep update={updateData} />}
    </>
  );
}
