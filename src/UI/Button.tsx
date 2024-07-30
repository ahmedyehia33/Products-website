import { ReactNode } from "react";

interface IProp {
    className?:string;
    children: ReactNode
}


const Button= ({ className , children , ...rest} : IProp) => {
    
  return ( <>
        <button  className={`${className} text-white text-center h-[2.7rem] w-full` }  {...rest} >{children}</button>
          </> );
}

export default  Button;