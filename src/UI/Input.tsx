import { InputHTMLAttributes } from "react";

interface IProp extends InputHTMLAttributes<HTMLInputElement> {}


const Input= ({...rest} :IProp) => {
  return ( <>
    
     
      <input type='text' name='' id='' 
      className=
      'border-[1px] border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-100 rounded-lg px-3 py-3 text-md h-10 '
       {...rest} />
   
          </> );
}

export default  Input;