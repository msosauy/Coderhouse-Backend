import { Router } from "express";

const viewsRoute = Router();

viewsRoute.get('/realTimeProducts', async (req, res) => {
    res.render('realTimeProducts', {})
})

export default viewsRoute;