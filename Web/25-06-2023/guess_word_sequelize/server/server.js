const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json());

const port = 3000
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const Sequelize = require('sequelize');
const { userinfos, questions,levels,subscription } = require('./models');

const checkExistingUserEmail = async (req, res, next) => {
  try {
      const { email, password } = req.body;
      const user = await userinfos.findOne({where: {email} });
      if(user){
          return res.status(400).json({message: 'UserName already exist'});
      }
      next()
  } catch(error){
      console.error('UserName already exist', error);
      res.status(500).json({message: 'Server error'});

  }
};

app.post('/register/users', checkExistingUserEmail,async(req,res)=> {
  try {
      const {email, password} = req.body;
      const newUser = await userinfos.create({email, password});
      res.status(201).json({message: 'Registration successful', user: newUser});
  } catch (error){
      console.error('Error registration user', error)
      res.status(500).json({ message: 'UserName already exist' });
  }
});



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})