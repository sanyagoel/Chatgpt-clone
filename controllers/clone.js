const express = require('express');

const getPage = (req,res,next)=>{
    return res.render('home.ejs');
}


module.exports = {getPage}