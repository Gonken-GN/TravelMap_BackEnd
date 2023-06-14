/**
 * Programmer: Raden Fadhil Anugerah Ardiwilaga
 * Filename: index
 * Contact: fadhilanugrah21@upi.edu
 * Date: 12 June 2023
 * summary: Main of the back end
 * */

import express from "express";

import { addNewUser, login, getAllPin } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/", addNewUser);
router.get("/", getAllPin);
router.post("/login", login);
export default router;
