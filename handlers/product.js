const db = require('../db');

//get product
const getProductById = async (req,res) => {
    try{
       const id = req.params.id;
       const product = await db.read('product/'+id);
       res.send(product);
    } catch(error) {
        console.log('error:',error);
    }
}

const getProduct =  async (req,res) => {
    try{
       const product = await db.read('product');
       res.json(product);
    } catch(error) {
        console.log('error:',error);
    }
}



//create product
const createProduct = async (req,res) => {
    try{
        const id = req.params.id;  
        const product = {
            name: 'charger',
            price: 200,
        }  
       
       await db.create('product/'+id,product);
    } catch (error) {
        console.log('error: ', error)
    }
}

//put product
const pushProduct = async (req,res) => {
    try{
     
        const product = {
            name: 'USB',
            price: 200,
        }  
        
       await db.pushData('product/',product);
    } catch (error) {
        console.log('error: ', error)
    }
}


//delete product
const deleteProduct = async (req,res) => {
    try{
      const id = req.params.id; 
      const product = await db.deletes('product/'+id);
      console.log('delete:',product);
    } catch(error) {
        console.log('error:',error);
    }
}



module.exports = {getProductById,getProduct,deleteProduct,pushProduct,createProduct}