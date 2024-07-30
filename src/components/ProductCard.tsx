import { IProduct } from "../Interfaces";
import Button from "../UI/Button";
import { DescriptionTrimmer } from "./DescriptionTrimmer";
import Image from "./Image";
interface IProp {
    Product: IProduct;
}


const ProductCard= ({Product} : IProp) => {
  return ( <>
            <div className="flex flex-col rounde-md p-2 h-[30rem] w-[18rem] m-4 border-2 rounded-lg">
                <Image className="h-[50%] w-[100%] rounded-md mb-2" 
                imageUrl={Product.imgURL}
                alt="product-image" />

                <h3>{Product.title}</h3>
                <p>{DescriptionTrimmer(Product.description)}</p>
                <div className="flex items-center space-x-2 my-4">
                {Product.colors.map((c, index) => (
    <span
      key={index}
      className="h-5 w-5 rounded-full border border-gray-600"
      style={{ backgroundColor: c }}
    ></span>
  ))}
                </div>
                <div className="flex items-center justify-between">
                    <span>${Product.price}</span>
                    <Image className="h-5 w-5 rounded-full object-center"
                     imageUrl={Product.categoryImgURL} 
                    alt="" />
                </div>
                <div className="flex w-[100%] items-center space-x-3 justify-center my-4">
                    <Button className="  rounded-lg bg-sky-800  ">Eidt</Button>
                    <Button className="  rounded-lg bg-red-800 ">Delete</Button>
                </div>
            </div>
          </> );
}

export default  ProductCard;