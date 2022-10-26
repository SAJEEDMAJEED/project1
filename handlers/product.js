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

const getProducts =  async (req,res) => {
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
        console.log(req.body);
        res.json(req.body);
        await db.create('product',req.body);

    } catch (error) {
        console.log('error: ', error)
    }
}

//put product
const pushProduct = async (req,res) => {
    try{
     
       console.log(req.body); 
       res.json(req.body);
       await db.pushData('product',req.body);
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

const all = (req, res) => {
        try {
            res.status(404).send('the page you are looking is not found');
        } catch (error) {
            console.log('error: ', error);
        }
    };
    


module.exports = {getProductById,getProducts,deleteProduct,pushProduct,createProduct,all}