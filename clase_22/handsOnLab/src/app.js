import express from "express";
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser'
import passport from "passport";
import { initializePassport } from "./config/passport.js";
import { authorization, passportCall } from "./utils.js";

const app = express();

app.use(express.json());
app.use(express.static('./src/public'));
app.use(cookieParser());

initializePassport();
app.use(passport.initialize());

app.post('/login', (req,res)=> {
    const {email, password} = req.body;
    if (email==="coder@coder.com" && password === "coderpass") {
        const token = jwt.sign({email, password, role:'user'}, 'coderToken', {expiresIn: "24h"});
        res.cookie('coderCookie', token, {httpOnly: true}).send({status: "success", message: 'Logged in'})
    } else {
        res.status(401).send({status:'error', error: 'incorrect credentials'});
    }
})

app.get('/current',passportCall('jwt'), authorization('user'), (req, res)=> {
    console.log(req.saludo)
    res.send(req.user);
})

app.listen(8080, ()=> {
    console.log('Server ON')
})