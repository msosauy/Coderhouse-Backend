import { Router } from "express";
import { studentModel } from "../models/student.js";

const router = Router();

const students = [{
    "nombre": "Steffen",
    "apellido": "Terzo",
    "edad": 36,
    "dni": "15691240",
    "curso": "Programación Backend",
    "nota": 9
}, {
    "nombre": "Jorgan",
    "apellido": "Matthis",
    "edad": 27,
    "dni": "29358120",
    "curso": "Programación Frontend",
    "nota": 6
}, {
    "nombre": "Haley",
    "apellido": "Proback",
    "edad": 34,
    "dni": "51241268",
    "curso": "Diseño UX/UI",
    "nota": 7
}, {
    "nombre": "Michelina",
    "apellido": "Beaglehole",
    "edad": 34,
    "dni": "24614567",
    "curso": "Diseño UX/UI",
    "nota": 6
}, {
    "nombre": "Jeralee",
    "apellido": "Postans",
    "edad": 26,
    "dni": "97212450",
    "curso": "Programación Frontend",
    "nota": 6
}, {
    "nombre": "Jordain",
    "apellido": "Kerner",
    "edad": 35,
    "dni": "41262234",
    "curso": "Programación Backend",
    "nota": 5
}, {
    "nombre": "Harriett",
    "apellido": "Skeene",
    "edad": 33,
    "dni": "21245129",
    "curso": "Programación Backend",
    "nota": 10
}, {
    "nombre": "Andie",
    "apellido": "McIlrath",
    "edad": 20,
    "dni": "59127389",
    "curso": "Programación Frontend",
    "nota": 9
}, {
    "nombre": "Sapphira",
    "apellido": "Arnholtz",
    "edad": 17,
    "dni": "03128893",
    "curso": "Programación Backend",
    "nota": 5
}, {
    "nombre": "Terra",
    "apellido": "Wadsworth",
    "edad": 31,
    "dni": "02213850",
    "curso": "Diseño UX/UI",
    "nota": 10
}]

router.get('/', async (req, res) => {
    try {
        let students = await studentModel.find();
        res.send({ result: 'success', payload: students });
    } catch (error) {
        console.log('Error de conexion');
    }
})

router.post('/', async (req, res) => {
    let result = await studentModel.insertMany(students);
    res.send({ status: "success", payload: result });
})

router.put('/:uid', async (req, res) => {
    let { uid } = req.params;

    let userToReplace = req.body;
    let result = await studentModel.updateOne({ _id: uid }, userToReplace);
    res.send({ status: "success", payload: result });
})

router.delete('/:uid', async (req, res) => {
    let { uid } = req.params;

    let result = await studentModel.deleteOne({ _id: uid });
    res.send({ status: "success", payload: result });
})

export default router;