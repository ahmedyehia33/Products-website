import { IProduct } from "../Interfaces";
import Button from "../UI/Button";
import { DescriptionTrimmer } from "./DescriptionTrimmer";
import Image from "./Image";
interface IProp {
    Product: IProduct;
    setProductToEdit: (Product : IProduct) => void;
    openEditModal: ()=> void;
    setProductToEditIndex: (value: number)=> void;
    openRemovingModal: ()=> void;
    index: number ; 
}


const ProductCard= ({Product ,openRemovingModal , setProductToEdit , openEditModal, setProductToEditIndex , index} : IProp) => {
  const onEdit = ()=>{
    openEditModal();
    setProductToEdit(Product)
    setProductToEditIndex(index);
  }
  const onRemove = ()=> {
    setProductToEdit(Product);
    openRemovingModal()
  }


  return ( <>
            <div className="flex flex-col rounde-md p-2 h-[35rem] w-[18rem] m-4 border-2 rounded-lg">
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
                <div className="flex items-center justify-between font-semibold text-sky-500">
                   <div> <span>${Product.price}</span></div>
                   <div className="h-12 w-12 rounded-full border "> <Image className="w-full h-full rounded-full object-cover"
                     imageUrl={Product.category.imgURL} 
                    alt="" /></div>
                </div>
                <div className="flex w-[100%] items-center space-x-3 justify-center mt-4">
                    <Button className="  rounded-lg bg-sky-800  " onClick={onEdit}>Eidt</Button>
                    <Button className="  rounded-lg bg-red-800 " onClick={onRemove}>Delete</Button>
                </div>
            </div>
          </> );
}

export default  ProductCard;