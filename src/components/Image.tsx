interface IProp {
                imageUrl: string;
                alt:string;
                className?:string

}


const Image= ({imageUrl , alt , className} : IProp) => {

  return ( <>
        <img src={imageUrl} alt={alt} className={className} style={{ objectPostion: 'center', objectFit:'contain'}} />
          </> );
}

export default  Image;