/**
 * Programmer: Raden Fadhil Anugerah Ardiwilaga
 * Filename: index
 * Contact: fadhilanugrah21@upi.edu
 * Date: 12 June 2023
 * summary: Main of the back end
 * */

import mongoose from "mongoose";
import Pin from "../models/Pin.js";
/**
 * @swagger
 * tags:
 *  name: Pins
 *  summary: The Pins managing API
 * /pins:
 */
export const addNewPin = async (
  /** @type import('express').Request */ req,
  /** @type import('express').Response */ res
) => {
  const { username, title, desc, rating, lat, long } = req.body;
  try {
    const newPin = new Pin({ username, title, desc, rating, lat, long });
    await newPin.save();
    const response = res.status(200).json({
      status: "success",
      data: {
        newPin,
      },
    });
    return response;
  } catch (err) {
    const response = res.status(500).json({
      status: "fail",
      message: err.message,
    });
    return response;
  }
};

export const getAllPin = async (
  /** @type import('express').Request */ req,
  /** @type import('express').Response */ res
) => {
  try {
    const pins = await Pin.find();
    if (pins == null) {
      const response = res.status(400).json({
        status: "fail",
        message: "Bad Request.",
      });
      return response;
    }
    const response = res.status(200).json({
      status: "success",
      data: {
        pins,
      },
    });
    return response;
  } catch (err) {
    const response = res.status(500).json({
      status: "fail",
      message: err.message,
    });
    return response;
  }
};
