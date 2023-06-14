/**
 * Programmer: Raden Fadhil Anugerah Ardiwilaga
 * Filename: index
 * Contact: fadhilanugrah21@upi.edu
 * Date: 12 June 2023
 * summary: Main of the back end
 * */

import express from "express";

import { addNewPin, getAllPin } from "../controllers/pin.controller.js";
const router = express.Router();

router.post("/", addNewPin);
router.get("/", getAllPin);
export default router;
