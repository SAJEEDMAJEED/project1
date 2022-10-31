const db = require('../db');
const uuidv4 = require('../helpers/uuid')

//get user
const getUser = async (req,res) => {
    try{
       const id = req.params.id;
       const user = await db.read('users/'+id);
       res.send(user);
    } catch(error) {
        console.log('error:',error);
    }
}

const getUsers =  async (req,res) => {
    try{
       const users = await db.read('users');
       res.send(users);
    } catch(error) {
        console.log('error:',error);
    }
}



//create user
const createUser = async (req,res) => {
    try{
        req.body.userId = uuidv4;
        console.log(req.body);
        res.json(req.body);
        await db.create('users/'+uuidv4,req.body);

    } catch (error) {
        console.log('error: ', error)
    }
}

//put user
const pushUser = async (req,res) => {
    try{
       req.body.userId = uuidv4;
       console.log(req.body); 
       res.json(req.body);
       await db.pushData('users',req.body);
    } catch (error) {
        console.log('error: ', error)
    }
}


//delete product
const deleteUser = async (req,res) => {
    try{
      const id = req.params.id; 
      const user = await db.deletes('users/'+id);
      console.log('delete:',user);
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
    


module.exports = {getUser,getUsers,deleteUser,pushUser,createUser,all}