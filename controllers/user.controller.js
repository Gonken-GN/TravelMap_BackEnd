/**
 * Programmer: Raden Fadhil Anugerah Ardiwilaga
 * Filename: index
 * Contact: fadhilanugrah21@upi.edu
 * Date: 12 June 2023
 * summary: Main of the back end
 * */
import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt";
/**
 * @swagger
 * tags:
 *  name: Pins
 *  summary: The Pins managing API
 * /pins:
 */
export const addNewUser = async (
  /** @type import('express').Request */ req,
  /** @type import('express').Response */ res
) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    const response = res.status(200).json({
      status: "success",
      data: {
        newUser,
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
export const login = async (
  /** @type import('express').Request */ req,
  /** @type import('express').Response */ res
) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      const response = res.status(404).json({
        status: "fail",
        message: `Username tidak ditemukan`,
      });
      return response;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      const response = res.status(400).json({
        status: "fail",
        message: "Password Salah.",
      });
      return response;
    }
    const response = res.status(200).json({
        status: "success",
        data: {
          user,
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
export const getAllUser = async (
  /** @type import('express').Request */ req,
  /** @type import('express').Response */ res
) => {
  try {
    const users = await User.find();
    if (users == null) {
      const response = res.status(400).json({
        status: "fail",
        message: "Bad Request.",
      });
      return response;
    }
    const response = res.status(200).json({
      status: "success",
      data: {
        users,
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
