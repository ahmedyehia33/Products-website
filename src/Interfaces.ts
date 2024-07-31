export interface IProduct {
    id?: string;
    title: string;
    description: string;
    price: string;
    category: string;
    imgURL: string;
    categoryImgURL: string;
    colors: string[];
  }


  export interface IFormInput {
    id: string;
    name: 'title' | 'description' | 'price' | "imgURL";
    label: string;
    type: string

  }

  export interface ICategory {
    id: string ;
    name: string;
    imgURL : string

  }