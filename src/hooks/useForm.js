import { useState, useEffect } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
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
    error_message: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('State changed', values);
  }, [values]);

  const handleSelect = (selection) => {
    setValues({ ...values, type: selection });
  };

  const handleChange = (event) => {
    const { type, value } = event.target;
    setValues({
      ...values,
      [type]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return {
    handleChange,
    handleSubmit,
    handleSelect,
    error,
    setError,
    values,
    setValues,
  };
};

export default useForm;
