
//logger middleware
const mwLogger = (req,res,next) => {
    try{

      console.log('here is the log for each request ');
      next();
    } catch (error) {
        console.log('error:',error);
    }
};

//udate middleware
const mwUpdate = (req,res,next) => {
    try{

      console.log(' successfully updates');
      next();
    } catch (error) {
        console.log('error:',error);
    }
};


//delete middleware

const mwDeleted = (req,res,next) => {
    try{

      console.log('successfully deleted ');
      next();
    } catch (error) {
        console.log('error:',error);
    }
};

//put middleware
const mwPut = (req,res,next) => {
    try{

      console.log('successfully put data');
      next();
    } catch (error) {
        console.log('error:',error);
    }
};



module.exports = {mwLogger,mwUpdate,mwDeleted,mwPut};