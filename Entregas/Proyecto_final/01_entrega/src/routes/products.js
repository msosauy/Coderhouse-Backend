import {Router} from "express";

const router = Router();
const users = [
    {
        name: "Manuel",
        apellido: "Sosa" 
    },
    {
        name: "Manuel",
        apellido: "Sosa" 
    },
    {
        name: "Manuel",
        apellido: "Sosa" 
    }
];

router.use((req, res, next) => {
    console.log("working");
    next();
})

router.get("/", (req, res) => {
    const limit = req.query.limit;
    console.log(limit);
    res.send(users);
})

export default router;