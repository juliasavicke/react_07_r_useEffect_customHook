import { useState } from 'react';
function useInput(initValue) {
  const [inputValue, setInputValue] = useState(initValue);

  function inputHandler(e) {
    setInputValue(e.target.value);
  }

  return {
    value: inputValue,
    setter: inputHandler,
  };
}
export default useInput;
