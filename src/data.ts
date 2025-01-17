import { ICategory, IProduct } from "./Interfaces";
import { IFormInput } from "./Interfaces";

export const ProductList: IProduct[] = [
    {
      id: "1",
      title: "Apple iPhone 13",
      description: "The latest iPhone with A15 Bionic chip, 5G support, and improved camera system.",
     price:'999.99',
      category:{
    id: '1',
    name: 'Smartphone',
    imgURL: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1632277085000",
      
      colors: ["#000000", "#FFFFFF", "#ADD8E6", "#FFC0CB", "#FF0000"],
    },
    {
      id: "2",
      title: "Samsung Galaxy S21",
      description: "Samsung's flagship smartphone with Exynos 2100, dynamic AMOLED display, and triple camera.",
     price: '849.99',
       category:{
    id: '1',
    name: 'Smartphone',
    imgURL: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://images.unsplash.com/photo-1610792516775-01de03eae630?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
      colors: ["#000000", "#C0C0C0", "#EE82EE"],
    },
    {
      id: "3",
      title: "Sony WH-1000XM4",
      description: "Industry-leading noise-canceling headphones with up to 30 hours of battery life.",
      price:'349.99',
      category: {name:"Headphones" , id:'2' , imgURL:"https://cdn.pixabay.com/photo/2016/11/18/16/32/headphones-1832800__340.jpg"},
      imgURL: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
      colors: ["#000000", "#C0C0C0", "#191970"],
    },
    {
      id: "4",
      title: "Apple MacBook Pro 14",
      description: "Apple's new 14-inch MacBook Pro with M1 Pro chip, Liquid Retina XDR display, and long battery life.",
      price:'1999.99',
      category:  {
    id: '2',
    name: 'Laptop',
    imgURL: 'https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://images.unsplash.com/photo-1635514874042-beb98fd8ea43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBNYWNCb29rJTIwUHJvJTIwMTR8ZW58MHx8MHx8fDA%3D",
      
      colors: ["#C0C0C0", "#2F4F4F"],
    },
    {
      id: "5",
      title: "Apple iPhone 13",
      description: "The latest iPhone with A15 Bionic chip, 5G support, and improved camera system.",
     price:'999.99',
       category:{
    id: '1',
    name: 'Smartphone',
    imgURL: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1632277085000",
      
      colors: ["#000000", "#FFFFFF", "#ADD8E6", "#FFC0CB", "#FF0000"],
    },
    {
      id: "6",
      title: "Samsung Galaxy S21",
      description: "Samsung's flagship smartphone with Exynos 2100, dynamic AMOLED display, and triple camera.",
     price: '849.99',
       category:{
    id: '1',
    name: 'Smartphone',
    imgURL: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://images.unsplash.com/photo-1610792516775-01de03eae630?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
      colors: ["#000000", "#C0C0C0", "#EE82EE"],
    },
    {
      id: "7",
      title: "Sony WH-1000XM4",
      description: "Industry-leading noise-canceling headphones with up to 30 hours of battery life.",
      price:'349.99',
     category: {name:"Headphones" , id:'2' , imgURL:"https://cdn.pixabay.com/photo/2016/11/18/16/32/headphones-1832800__340.jpg"},
      imgURL: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
      colors: ["#000000", "#C0C0C0", "#191970"],
    },
    {
      id: "8",
      title: "Apple MacBook Pro 14",
      description: "Apple's new 14-inch MacBook Pro with M1 Pro chip, Liquid Retina XDR display, and long battery life.",
      price:'1999.99',
       category:  {
    id: '2',
    name: 'Laptop',
    imgURL: 'https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://images.unsplash.com/photo-1635514874042-beb98fd8ea43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBNYWNCb29rJTIwUHJvJTIwMTR8ZW58MHx8MHx8fDA%3D",
      
      colors: ["#C0C0C0", "#2F4F4F"],
    },
    {
      id: "9",
      title: "Apple iPhone 13",
      description: "The latest iPhone with A15 Bionic chip, 5G support, and improved camera system.",
     price:'999.99',
       category:{
    id: '1',
    name: 'Smartphone',
    imgURL: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1632277085000",
      
      colors: ["#000000", "#FFFFFF", "#ADD8E6", "#FFC0CB", "#FF0000"],
    },
    {
      id: "10",
      title: "Samsung Galaxy S21",
      description: "Samsung's flagship smartphone with Exynos 2100, dynamic AMOLED display, and triple camera.",
     price: '849.99',
       category:{
    id: '1',
    name: 'Smartphone',
    imgURL: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://images.unsplash.com/photo-1610792516775-01de03eae630?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
      colors: ["#000000", "#C0C0C0", "#EE82EE"],
    },
    {
      id: "11",
      title: "Sony WH-1000XM4",
      description: "Industry-leading noise-canceling headphones with up to 30 hours of battery life.",
      price:'349.99',
     category: {name:"Headphones" , id:'2' , imgURL:"https://cdn.pixabay.com/photo/2016/11/18/16/32/headphones-1832800__340.jpg"},
      imgURL: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
      colors: ["#000000", "#C0C0C0", "#191970"],
    },
    {
      id: "12",
      title: "Apple MacBook Pro 14",
      description: "Apple's new 14-inch MacBook Pro with M1 Pro chip, Liquid Retina XDR display, and long battery life.",
      price:'1999.99',
       category:  {
    id: '2',
    name: 'Laptop',
    imgURL: 'https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://images.unsplash.com/photo-1635514874042-beb98fd8ea43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBNYWNCb29rJTIwUHJvJTIwMTR8ZW58MHx8MHx8fDA%3D",
      
      colors: ["#C0C0C0", "#2F4F4F"],
    },
    {
      id: "13",
      title: "Apple iPhone 13",
      description: "The latest iPhone with A15 Bionic chip, 5G support, and improved camera system.",
     price:'999.99',
       category:{
    id: '1',
    name: 'Smartphone',
    imgURL: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1632277085000",
      
      colors: ["#000000", "#FFFFFF", "#ADD8E6", "#FFC0CB", "#FF0000"],
    },
    {
      id: "14",
      title: "Samsung Galaxy S21",
      description: "Samsung's flagship smartphone with Exynos 2100, dynamic AMOLED display, and triple camera.",
      price: '849.99',
      category:{
    id: '1',
    name: 'Smartphone',
    imgURL: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://images.unsplash.com/photo-1610792516775-01de03eae630?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
      colors: ["#000000", "#C0C0C0", "#EE82EE"],
    },
    {
      id: "15",
      title: "Sony WH-1000XM4",
      description: "Industry-leading noise-canceling headphones with up to 30 hours of battery life.",
      price:'349.99',
     category: {name:"Headphones" , id:'2' , imgURL:"https://cdn.pixabay.com/photo/2016/11/18/16/32/headphones-1832800__340.jpg"},
      imgURL: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
      colors: ["#000000", "#C0C0C0", "#191970"],
    },
    {
      id: "16",
      title: "Apple MacBook Pro 14",
      description: "Apple's new 14-inch MacBook Pro with M1 Pro chip, Liquid Retina XDR display, and long battery life.",
      price:'1999.99',
       category:  {
    id: '2',
    name: 'Laptop',
    imgURL: 'https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
      imgURL: "https://images.unsplash.com/photo-1635514874042-beb98fd8ea43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBNYWNCb29rJTIwUHJvJTIwMTR8ZW58MHx8MHx8fDA%3D",
      
      colors: ["#C0C0C0", "#2F4F4F"],
    },
    
  ];

export const formInputList:IFormInput[] = [
  {
  id: 'title',
  name: 'title',
  label: 'Product Title',
  type: 'text'
},
{
  id: 'description',
  name: 'description',
  label: 'Product Description',
  type: 'text'
},
{
  id: 'image',
  name: 'imgURL',
  label: 'Product Image',
  type: 'text'
},
{
  id: 'price',
  name: 'price',
  label: 'Product Price',
  type: 'text'
}
];

export const Colors : string [] = [
'#978193',
'#c0eeff',
'#ffd1c0',
'#00355b',
'#fffdad',
'#fff68f',
'#878777',
'#c1b1a0', 
'#ff7f50', 
'#f3bb6c', 
'#93c572', 
'#003153',
'#16537e', 
'#9fb380',
'#d0b284',
'#633d9b', 
'#e1b135', 
'#150a05', 
'#c9a40b', 
'#a25c11', 
'#0a7c2a',
'#000000',
'#FFFFFF',
'#ADD8E6',
'#FFC0CB',
'#FF0000',
'#C0C0C0',
"#EE82EE",
'#191970'
];

export const Categories: ICategory[]= [
  {
    id: '1',
    name: 'Smartphone',
    imgURL: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: 'Laptop',
    imgURL: 'https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: 'Formal Wear',
    imgURL: 'https://plus.unsplash.com/premium_photo-1683140849283-c433d60973db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VpdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '4',
    name: 'Accessories',
    imgURL: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D',
  }

]