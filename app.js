const {read, create} = require('./db');

//get product
const getProduct = async () => {
    try{
         const products = await read('product');
         console.log('products:',products)
    } catch (error) {
        console.log('error: ', error);
    }
}

getProduct();//read call

//create product
const createProduct = async () => {
    try{
        const product = {
            name: 'wireless keyboard',
            price: 800,
        }
       await create('product/3',product) 
    } catch (error) {
        console.log('error: ', error)
    }
}

createProduct(); //create call