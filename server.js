const express= require('express');
const hbs= require('hbs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.get('/bad',(req,res)=>{
  res.send({
    name : 'sai',
    likes : [
      'handle',
      'bad',
      'very ',
      'bad'
    ]
  });
});

app.get('/',(req,res)=>{
  res.render('about.hbs',{
    currentyear: new Date().getFullYear()
  })
});

app.use(express.static(__dirname+'/public'));
app.listen(4000,()=>{console.log('server up at port 4000');});
