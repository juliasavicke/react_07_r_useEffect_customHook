import { useState } from 'react';
function useInput(initValue) {
  const [inputValue, setInputValue] = useState(initValue);

  function inputHandler(e) {
    setInputValue(e.target.value);
  }
  function resetInput() {
    setInputValue('');
  }

  return {
    value: inputValue,
    setter: inputHandler,
    reset: resetInput,
  };
}
export default useInput;
