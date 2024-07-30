
import { ChangeEvent, FormEvent, useState } from 'react'
import { Colors, ProductList, formInputList } from './data'
import MyModal from './UI/Modal'
import ProductCard from './components/ProductCard'
import { Button } from '@headlessui/react'
import Input from './UI/Input'
import { IProduct } from './Interfaces'
import { productValidation } from './validation'
import ErrorMessage from './components/ErrorMessage'
import CircleColor from './UI/CircleColor'

function App() {
    const [product , setProduct] = useState<IProduct>({
      title: '',
      description: '',
      imgURL: '',
      price: '',
      category: '',
      categoryImgURL: '',
      colors:[]
    });

    const [tempColor, setTempColor] = useState<string[]>([]);
    console.log(tempColor)

    const [isOpen, setIsOpen] = useState(false);

    const [errors , setErrors] = useState({ title: '',
      description: '',
      imgURL: '',
      price: ''});
      

  const closeModal =()=> {
                setIsOpen(false)} 

  const openModal =()=>{
    setIsOpen(true)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
    const {value , name} = e.target;
    setProduct({...product , [name]: value});
    setErrors({...errors,
        [name]: ''})

  }

  const onSubmitHandler =(e: FormEvent<HTMLFormElement>): void=>{
    e.preventDefault();
    const {title , price , description , imgURL} = product;
    const errors = productValidation({title , price , description , imgURL});
    const hasErros = Object.values(errors).some((value) => value === '') && Object.values(errors).every((value)=> value === '')
    if(!hasErros){
      setErrors(errors);
      return;
    }
    setErrors(errors);
    console.log('sending product');
  }

  const onCancel = ()=>{
    console.log('cancel');
    setProduct({
      title: '',
      description: '',
      imgURL: '',
      price: '',
      category: '',
      categoryImgURL: '',
      colors:[]
    });
    setIsOpen(false);

  }

    const renderProducts = ProductList.map((p) => <ProductCard key={p.id} Product={p} />)
    
    const renderColors = Colors.map((color) => <CircleColor  key={color} color={color} onClick={()=> setTempColor((prv) => [...prv , color])}/>)

    const renderFormInputList = formInputList.map((input) => <div key={input.id} className='flex flex-col'>
      <div className='flex flex-col'>
      <label key={input.id}className='mb-1 mt-6' htmlFor={input.name}>
        {input.label}
      </label>
      <Input id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
      <ErrorMessage msg={errors[input.name]}/>
          
      </div>
      
    </div>)

  return (
    <>
    
    <main className='contianer mx-auto flex flex-col items-center'>
    <Button className='rounded-lg bg-sky-800 w-[5rem] mx-auto my-3 h-12 text-white' onClick={openModal}>Add</Button>
    <MyModal isOpen={isOpen} closeModal={closeModal}  title='Add New Product'>
      <form action="" onSubmit={onSubmitHandler}>
      {renderFormInputList}
      <div className='flex mt-4 space-x-1 flex-wrap '>
      {renderColors}
      </div>
      <div className='flex w-full'>
      <Button className="rounded-lg bg-sky-800 w-[40%] mx-auto h-12 mt-4 text-white " type='submit'>Submit</Button>
      <Button className="rounded-lg bg-gray-600 w-[40%] mx-auto h-12 mt-4 text-white" type='button' onClick={onCancel}>Cancel</Button>
      </div>
      </form>
      </MyModal>
       
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5 mx-auto'>
      {renderProducts}
   
     </div>
    
    </main>
    </>
  )
}

export default App
