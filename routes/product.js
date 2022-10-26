 const app =require('../app');
const product = require('../handlers/product');

app.get('/product/:id',product.getProductById);
app.get('/products',product.getProducts);
app.post('/product/post',product.createProduct);
app.put('/product/put',product.pushProduct);
app.delete('/product/:id',product.deleteProduct);
app.all('*',product.all);