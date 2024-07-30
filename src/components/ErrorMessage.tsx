interface IProp {
msg: string
}


const ErrorMessage= ({msg} :IProp) => {
  return ( <>
      {msg ?  <span className="block text-black text-sm font-semibold ">{msg}</span> : null }
          </> );
}

export default  ErrorMessage;