
//logger middleware
const logger = (req,res,next) => {
    try{
      
      console.log('here is the log for each request ');
      console.log(req.headers.date = new Date().toLocaleDateString());
    
      next();
    } catch (error) {
        console.log('error:',error);
    }
};

module.exports = logger;