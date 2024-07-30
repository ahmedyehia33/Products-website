/**
 * Validates a product object with title, description, price, and imgURL fields.
 * 
 * @param {Object} product - The product object to validate.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.price - The price of the product.
 * @param {string} product.imgURL - The image URL of the product.
 * 
 * @returns {Object} errors - An object containing error messages for invalid fields.
 * @returns {string} errors.title - Error message for the title field.
 * @returns {string} errors.description - Error message for the description field.
 * @returns {string} errors.price - Error message for the price field.
 * @returns {string} errors.imgURL - Error message for the imgURL field.
 */
export const productValidation = (product : { title: string;
    description: string;
    price: string;
    imgURL: string})=>{
    const errors:{ title: string;
        description: string;
        price: string;
        imgURL: string} = { title: '',
                            description: '',
                            imgURL: '',
                            price: ''};
    const validUrl = /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|\d{1,3}(\.\d{1,3}){3}|(\[?[A-Fa-f\d]{0,4}(:[A-Fa-f\d]{0,4}){0,7}\]?))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(\#[-a-zA-Z\d_]*)?$/.test(product.imgURL)



    if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
        errors.title = 'Product Title must be between 10 to 80 charcter'
    }
    if(!product.description.trim() || product.description.length < 10 || product.description.length > 80){
        errors.description = 'Product Description must be between 10 to 80 charcter'
    }
    if(!product.imgURL || !validUrl){
        errors.imgURL = 'Please Provide a valid image URL';
    }
    if(!product.price.trim() || isNaN(Number(product.price))){
        errors.price ='Please Enter a Valid Number '
    }
    return errors;
}