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
 *      User:
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

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('users', UserSchema);

export default User;
