import { useState } from "react";

//This hook has to receive a initial form as an object with the name of the values and its values (It may be '')
//The way of calling this hook may look something like this:   const { formState, onInputChange, value1, value2 } = useForm({ value1: "", value2: "" });
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
