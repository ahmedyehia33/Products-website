interface IProp {
    color: string;
    onClick: ()=> void;

}


const CircleColor= ({color, onClick} : IProp) => {
  return ( <>
        <span className="block h-5 w-5 rounded-full border border-gray-600 mb-1 cursor-pointer "
         style={{backgroundColor: color }}
          onClick={onClick} ></span>
    
          </> );
}

export default  CircleColor;