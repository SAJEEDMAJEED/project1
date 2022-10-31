const app =require('../app');
const users = require('../handlers/users');


app.get('/user/:id',users.getUser);
app.get('/users',users.getUsers);
app.post('/user',users.createUser);
app.put('/user',users.pushUser);
app.delete('/user/:id',users.deleteUser);
app.all('*',users.all);