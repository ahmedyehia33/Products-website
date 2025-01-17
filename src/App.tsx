
import { ChangeEvent, FormEvent ,  useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Categories, Colors, ProductList, formInputList } from './data'
import MyModal from './UI/Modal'
import ProductCard from './components/ProductCard'
import { Button } from '@headlessui/react'
import Input from './UI/Input'
import { EditableProductFields, ICategory, IProduct } from './Interfaces'
import { productValidation } from './validation'
import ErrorMessage from './components/ErrorMessage'
import CircleColor from './UI/CircleColor'
import Select from './UI/Select';

function App() {
    const [selectedCategory , setSelectedCategory] = useState<ICategory>(Categories[0]);
    const [productToEdit , setProductToEdit] =useState<IProduct>({
      title: '',
      description: '',
      imgURL: '',
      price: '',
      category:{name: '' , id:'' , imgURL:''},
      colors:[]
    });
    const [productToEditIndex , setProductToEditIndex] = useState<number>(0)
    const [products , setProducts] = useState(ProductList);
    const [product , setProduct] = useState<IProduct>({
      title: '',
      description: '',
      imgURL: '',
      price: '',
      category:{name: '' , id:'' , imgURL:''},
      colors:[]
    });
    const [tempColor, setTempColor] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit , setIsOpenEdit] = useState(false);
    const [isOpenRemove , setIsOpenRemove] = useState(false);
    const [errors , setErrors] = useState({ title: '',
      description: '',
      imgURL: '',
      price: '',
      colors: ''});
      
  const closeModal =()=> { setIsOpen(false)} 
               
  const openModal =()=>{
    setIsOpen(true)
  }

  const closeEditModal =()=> { setIsOpenEdit(false)} 

  const openEditModal =()=>{setIsOpenEdit(true)}
  const closeRemovingModal =()=> { setIsOpenRemove(false)} 

  const openRemovingModal =()=>{setIsOpenRemove(true)}
  

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
    const {value , name} = e.target;
    setProduct({...product , [name]: value});
    setErrors({...errors,
        [name]: ''})
  }

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>)=>{
    const {value , name} = e.target;
    setProductToEdit({...productToEdit , [name]: value});
    setErrors({...errors,
        [name]: ''}) }

  const onSubmitHandler =(e: FormEvent<HTMLFormElement>): void=>{
    e.preventDefault();
    product.colors = tempColor;
    const {title , price , description , imgURL, colors} = product;
    const errors = productValidation({title , price , description , imgURL, colors });
    
    const hasErros = Object.values(errors).some((value) => value === '') && Object.values(errors).every((value)=> value === '')
    if(!hasErros){
      setErrors(errors);
      return;
    }
    setErrors(errors);
    product.colors = tempColor;
    setProducts((prv) => [...prv , {...product, id: uuidv4(), category: selectedCategory }]);
    setProduct({
      title: '',
      description: '',
      imgURL: '',
      price: '',
      category:{name: '' , id:'' , imgURL:''},
      colors: []
    });
    setTempColor([]);
    setIsOpen(false);
  }

  const onSubmitEditHandler =(e: FormEvent<HTMLFormElement>): void=>{
    e.preventDefault();
    productToEdit.colors = tempColor.concat(productToEdit.colors);
    const {title , price , description , imgURL, colors} = productToEdit;
    const errors = productValidation({title , price , description , imgURL, colors });
    
    const hasErros = Object.values(errors).some((value) => value === '') && Object.values(errors).every((value)=> value === '')
    if(!hasErros){
      setErrors(errors);
      return;
    }
    setErrors(errors);
    const updatedProducts = [...products];
    updatedProducts[productToEditIndex] = {...productToEdit ,colors: tempColor.concat(productToEdit.colors.filter((color) => !tempColor.includes(color))), category: selectedCategory};
    setProducts(updatedProducts);
    setProductToEdit({
      title: '',
      description: '',
      imgURL: '',
      price: '',
      category:{name: '' , id:'' , imgURL:''},
      colors: []
    });
    setTempColor([]);
    setIsOpenEdit(false);
  }

  const onCancel = ()=>{
    setProduct({
      title: '',
      description: '',
      imgURL: '',
      price: '',
      category: {name:'' , id:'' , imgURL: ''},
      colors:[]
    });
    setIsOpen(false);
    setIsOpenEdit(false);

  }
  const onSubmitRemoveHandler = (e: FormEvent<HTMLFormElement>): void=>{
    e.preventDefault();
    const {id} = productToEdit;
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    setIsOpenRemove(false);
    return
  }

  const renderProducts = products.map((p , index) => <ProductCard key={p.id} Product={p} setProductToEdit={setProductToEdit} openEditModal={openEditModal} setProductToEditIndex={setProductToEditIndex} index={index} openRemovingModal={openRemovingModal}/>)
    
  const renderColors = Colors.map((color) => <CircleColor  key={color} color={color} onClick={()=> {
      if(tempColor.includes(color) ){
       setTempColor((prv) => prv.filter((item) => item !== color));
       return
      }
      if(tempColor.concat(productToEdit.colors).includes(color)){
      setProductToEdit((prv) => ({...prv , colors: prv.colors.filter((item) => item !== color)}))
      setTempColor((prv) => prv.filter((item) => item !==color));
      
      }
      setErrors({...errors , colors: ''});
      setTempColor((prv) => [...prv , color])}}/>)

  const renderFormInputList = formInputList.map((input) => <div key={input.id} className='flex flex-col'>
      <div className='flex flex-col'>
      <label key={input.id}className='mb-1 mt-6' htmlFor={input.name}>
        {input.label}
      </label>
      <Input id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
      <ErrorMessage msg={errors[input.name]}/>
          
      </div>
      
    </div>)
  
  const productToEditFormInput = (id: string , label: string , name: EditableProductFields)=>{
    return (<div className='flex flex-col'>
    <label className='mb-1 mt-6' htmlFor={name}>
     {label}
    </label>
    <Input id={id} name={name} value={productToEdit[name]} onChange={onChangeEditHandler} />
    <ErrorMessage msg={errors[name]}/> 
    </div>)

  }

  return (
    <>
    
    <main className='contianer mx-auto flex flex-col items-center'>
    <Button className='rounded-lg bg-sky-800 w-[9rem] mx-auto mb-3 mt-8 h-12 text-white' onClick={openModal}>Add new product</Button>
      {/*Add Modal */}
    <MyModal isOpen={isOpen} closeModal={closeModal}  title='Add New Product'>
      <form action="" onSubmit={onSubmitHandler}>
      {renderFormInputList}
      <Select selected={selectedCategory} setSelected={setSelectedCategory}/>
      <div className='flex flex-col'>
      <div className='flex mt-4 space-x-1 flex-wrap w-full '>
      {renderColors}
      </div>
      {errors.colors ? <span className="block mt-2"><ErrorMessage msg={errors.colors}/> </span> : null}
      
      </div>
      <div className='flex mt-4 space-x-1 flex-wrap  mb-1'>
        {tempColor.map((color) => (
          <span key={color} className='h-6 w-16 rounded-lg mt-1 mb-1 text-sm text-white text-center'
           style={{backgroundColor : color}}>{color}</span>
        ))}
      </div>
      <div className='flex w-full'>
      <Button className="rounded-lg bg-sky-800 w-[40%] mx-auto h-12 mt-4 text-white " type='submit'>Submit</Button>
      <Button className="rounded-lg bg-gray-600 w-[40%] mx-auto h-12 mt-4 text-white" type='button' onClick={onCancel}>Cancel</Button>
      </div>
      </form>
      </MyModal>
      {/*Edit Modal */}
      <MyModal isOpen={isOpenEdit} closeModal={closeEditModal}  title='Edit Product'>
      <form action="" onSubmit={onSubmitEditHandler}>
      <div  className='flex flex-col'>
        {productToEditFormInput('title' , 'Product Title' , 'title')}
        {productToEditFormInput('description' , 'Product description' , 'description')}
        {productToEditFormInput('imgURL' , 'Product image URL' , 'imgURL')}
        {productToEditFormInput('price' , 'Product price' , 'price')}
        <div>
        <Select selected={selectedCategory} setSelected={setSelectedCategory}/>
        </div>
        <div className='flex flex-col'>
          <div className='flex mt-4 space-x-1 flex-wrap w-full '>
            {renderColors}
          </div>
          <div>
          <div className='flex space-x-1 mt-2'>
            {tempColor.concat(productToEdit.colors).map((color) =>
              ( <span className='text-sm text-white rounded-lg p-1' style={{backgroundColor : color}}>
                 {color}
                 </span>))}
          </div>
          {errors.colors ? <span className="block mt-2"><ErrorMessage msg={errors.colors}/> </span> : null}
          </div>
        </div>
      
    </div>
      <div className='flex w-full'>
      <Button className="rounded-lg bg-sky-800 w-[40%] mx-auto h-12 mt-4 text-white " type='submit'>Submit</Button>
      <Button className="rounded-lg bg-gray-600 w-[40%] mx-auto h-12 mt-4 text-white" type='button' onClick={onCancel}>Cancel</Button>
      </div>
      </form>
      </MyModal>
      {/*Removing Product Modal */}
      <MyModal isOpen={isOpenRemove} closeModal={closeRemovingModal}  title='Remove Product'>
      <form action="" onSubmit={onSubmitRemoveHandler}>
        
        <p> Do You want To remove This Product <span className='font-bold text-lg '>{productToEdit.title}</span> ? </p>
        
      <div className='flex w-full'>
      <Button className="rounded-lg bg-red-800 w-[40%] mx-auto h-12 mt-4 text-white " type='submit'>Remove</Button>
      <Button className="rounded-lg bg-sky-600 w-[40%] mx-auto h-12 mt-4 text-white" type='button' onClick={onCancel}>Cancel</Button>
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
