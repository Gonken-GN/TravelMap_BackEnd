/**
* Programmer: Raden Fadhil Anugerah Ardiwilaga
* Filename: index
* Contact: fadhilanugrah21@upi.edu
* Date: 12 June 2023
* summary: Main of the back end
* */
import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *  schemas:
 *      Pin:
 *          type: object
 *          required:
 *              - username
 *              - email
 *              - password
 *          properties:
 *              id:
 *                  type: string
 *                  summary: The auto-generated id by MongoDB
 *              username:
 *                  type: string
 *                  summary:  The username of user
 *              email:
 *                  type: string
 *                  summary: The email of user
 *              password:
 *                  type: string
 *                  summary: The password of user
 *                  
 *
 */

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    title: {
        type: String,
        require: true,
        min: 3
    },
    desc: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5,
    },
    lat:{
        type: Number,
        require: true,
    },
    long:{
        type: Number,
        require: true,
    }
  },
  {
    timestamps: true,
  }
);
const Pin = mongoose.model('pins', PinSchema);

export default Pin;

