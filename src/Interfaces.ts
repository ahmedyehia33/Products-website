export type EditableProductFields = 'title' | 'price' | 'imgURL' | 'description'
export interface IProduct {
    id?: string;
    title: string;
    description: string;
    price: string;
    category:{id: string , imgURL: string , name: string};
    imgURL: string;
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