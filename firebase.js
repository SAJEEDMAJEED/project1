const db = require('./config')

const ref = db.ref('school/details');
const usersRef = ref.child('students');
const app = require('./service')



// create
app.get('/',(req,res)=>{
  res.status(200).send('connect')
  usersRef.set({
    hari: {
      date_of_birth: 'June 23, 1912',
      full_name: 'hari krishnan'
    },
    febin: {
      date_of_birth: 'December 9, 1906',
      full_name: 'febin mathew'
    }
  });
  
})

//update

app.post('/student/:age', (req, res) => {
  try {
      console.log('headers', req.headers);
      console.log('body', req.body);
      console.log('params', req.params);
      console.log('query', req.query);

      usersRef.update({
        'hari/age': req.params,
        'febin/age': req.params
      });
  } catch (error) {
      console.log('error: ', error);
  }
});

//push
app.post('/student/gender', (req, res) => {
  try {
         
  //push
    usersRef.push({
      gender: 'male',
      
    });
  } catch (error) {
      console.log('error: ', error);
  }
});

//delete

app.post('/remove', (req, res) => {
  try {
    ref.remove();
    
  } catch (error) {
      console.log('error: ', error);
  }
});



