const express = require('express')
const app = express();

app.listen(3000,(err,data)=>{
    if(err)
          console.log(err);
    else 
          console.log('connected')      
})


module.exports = app