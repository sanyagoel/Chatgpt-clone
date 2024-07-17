require('dotenv').config();
const express = require('express');
const rootDir = require('./utils/rootdir');
const bodyparser = require('body-parser');
const app = new express();
const path = require('path');
const homeRouter = require('./routes/homeRoutes');

app.use(express.static(path.join(rootDir,'public')));
app.use(bodyparser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.set('views',path.join(rootDir,'public','views'));
app.use('/',homeRouter);






app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`RUNNING ON PORT : ${process.env.PORT}`);
})

