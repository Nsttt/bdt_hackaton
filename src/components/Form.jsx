import React, { useState, useEffect } from 'react';
import { FirstStep, SecondStep, ThirdStep, FourthStep, Modal } from '.';
import useForm from '../hooks/useForm';
import useModal from '../hooks/useModal';

export default function Form() {
  const [step, setStep] = useState(0);
  const [stepName, setStepName] = useState('');

  const { error, values } = useForm();

  const { setShowModal } = useModal();

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
    if (error === true) {
      setShowModal(true);
    }
  }, [step, error]);

  const goNextStep = () => {
    if (step === 4) return;
    setStep(step + 1);
  };

  const goBackOneStep = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

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
      {error === true && <Modal message={values.error_message} />}
      {step === 0 && <FirstStep goNext={goNextStep} />}
      {step === 1 && <SecondStep goNext={goNextStep} />}
      {step === 2 && <ThirdStep />}
      {step === 3 && <FourthStep />}
    </>
  );
}
