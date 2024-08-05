interface IProp {
                imageUrl: string;
                alt:string;
                className?:string

}


const Image= ({imageUrl , alt , className} : IProp) => {

  return ( <>
        <img src={imageUrl} alt={alt} className={className} style={{ objectPosition: 'center', objectFit:'cover'}} />
          </> );
}

export default  Image;