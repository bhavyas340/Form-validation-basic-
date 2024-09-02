import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  
    const [enteredValue, setEnteredValue]= useState(defaultValue);
    
    const [didEdit, setDidEdit]= useState(false);

    const valueISValid = validationFn(enteredValue);
    function handelInputChange(event){
        setEnteredValue(event.target.value);
        setDidEdit(false)
      }
    function handelInputBlur(){
      setDidEdit(true)
      
    }

    return {
        value: enteredValue,
        handelInputBlur,
        handelInputChange,
        hasError: didEdit && !valueISValid
    }
}
