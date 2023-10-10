import express from "express";
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json());
app.use(express.static('./src/public'));
app.use(cookieParser());

app.post('/login', (req,res)=> {
    const {email, password} = req.body;
    if (email==="coder@coder.com" && password === "coderpass") {
        const token = jwt.sign({email, password}, 'coderToken', {expiresIn: "24h"});
        res.cookie('coderCookie', token, {httpOnly: true}).send({status: "success", message: 'Logged in'})
    } else {
        res.status(401).send({status:'error', error: 'incorrect credentials'});
    }
})

app.listen(8080, ()=> {
    console.log('Server ON')
})