const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bcrypt = require('bcrypt');
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
const { userinfos, questions, levels, subscriptions } = require('./models');

const checkRegisterUserEmail = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userinfos.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ message: 'Email already exist' });
    }
    next()
  } catch (error) {
    console.error(' ', error);
    res.status(500).json({ message: 'Server error' });

  }
};
app.put('/login/users', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(password);
    const user = await userinfos.findOne({ where: { email } });
    if (user) {
      bcrypt.compare(password, user.password, (bcryptError, bcryptResult) => {
        if (bcryptError) {
          throw bcryptError;
        }
        if (bcryptResult) {
          res.status(200).send({
            message: 'You are in the system'
            
          });
        } else {
          res.status(401).send('Invalid email or password');
        }
      });
    }
    else {
      return res.status(400).json({ message: 'Email does not exist' });
    }
  } catch (error) {
    console.error(' ', error);
    res.status(500).json({ message: 'Server error' });

  }
});

app.post('/register/users', checkRegisterUserEmail, async (req, res) => {
  try {
    let{ email, password } = req.body;
    const newUser = await userinfos.create({ email, password });
    
    /* bcrypt.genSalt(10, (saltError, salt) => {
      if (saltError) {
        throw saltError;
      }
      bcrypt.hash(password, salt, async (hashError, hashedPassword) => {
        if (hashError) {
          throw hashError;
        }
        console.log(hashedPassword);
        password=hashedPassword;
        const newUser = await userinfos.create({ email, password });
        
      });
    }); */
  } catch (error) {
    console.error('Error registration user', error);
    res.status(500).json({ message: 'Server error' });
  }
});



app.get('/random-word', async (req, res) => {
  try{
      const question = await questions.findOne({order: Sequelize.literal('random()')});
     
      console.log(question);
      res.json( question);
          } catch (error) {
              console.error('Error retrieving random word', error);
              res.status(500).json({ message: 'Server error' });
          }
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})