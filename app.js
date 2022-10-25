const {read, create,deletes} = require('./db');

 const express = require('express');
 const app = express();
 


app.listen(5000,()=>{
   
    console.log('server is listening on port 5000')
});

module.exports = app;

// //get product
// const getProduct = async () => {
//     try{
//          const products = await read('product/4');
//          console.log('products:',products);
//     } catch (error) {
//         console.log('error: ', error);
//     }
// }

// const getProduct1 = async () => {
//     try{
//          const products = await read('product/2');
//          console.log('products:',products);
//     } catch (error) {
//         console.log('error: ', error);
//     }
// }
// getProduct1();
// getProduct();//read call

// //create product
// const createProduct = async () => {
//     try{
//         const product = {
//             name: 'wireless keyboard',
//             price: 800,
//         }    
//        await create('product/3',product);
//     } catch (error) {
//         console.log('error: ', error)
//     }
// }

// createProduct(); //create call

// //delete product
// const deleteProduct = async () => {
//     try{
//       const product = await deletes('product/3/price');
//       console.log('delete:',product);
//     } catch(error) {
//         console.log('error:',error);
//     }
// }

// deleteProduct();
