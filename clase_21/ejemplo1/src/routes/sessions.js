import { Router } from "express";
import { userModel } from "../models/user.js";
import { createHash, isValidPassword } from "../utils.js";
import passport from "passport";

const router = Router();

router.get('/github', passport.authenticate('github', {scope: ['user:email']}) ,async (req, res) => {})

router.get('/githubCallback', passport.authenticate('github', {failureRedirect:'/loginFailed'}) ,async (req, res) => {
    req.session.user = req.user;
    res.redirect('/home')
})

export default router;