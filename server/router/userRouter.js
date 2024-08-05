const express = require('express');
const { register, login, getAllUSer, getUserById } = require('../controller/userController');

const userRouter = express.Router()

userRouter.post("/register", register)

userRouter.post("/login", login)

userRouter.get("/allUsers", getAllUSer)

userRouter.get("/:id", getUserById)

module.exports = userRouter