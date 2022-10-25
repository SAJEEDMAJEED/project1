 const app =require('../app');

const {mwDeleted,mwLogger,mwPut,mwUpdate} = require('../middleware/middleware');
const product = require('../handlers/product');

app.get('/product/:id',mwLogger,product.getProductById);
app.get('/product',mwLogger,product.getProduct);
app.post('/product/:id',mwUpdate,product.createProduct);
app.put('/product/pushData',mwPut,product.pushProduct);
app.delete('/product/:id',mwDeleted,product.deleteProduct);
