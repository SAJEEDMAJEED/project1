 const express = require('express');
 const app = express();
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 const mw = require('./middleware/logger')
app.use(mw);


app.listen(5000,()=>{
   
    console.log('server is listening on port 5000')
});

module.exports = app;