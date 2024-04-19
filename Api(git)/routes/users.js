import express from 'express'
import { addUser, deleteUser, getUsers, updateUser } from
'../controllers/userController.js';

const router = express.Router();

// Endereço para Usuario
router.get("/getU", getUsers);
router.post("/addU", addUser);
router.put("/updU", updateUser);
router.delete("/delU", deleteUser);
// router.get("/teste", () => {console.log("teste acionado")})

export default router;