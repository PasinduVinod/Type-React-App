// user.ts

import mongoose, { Model, Document } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  token?: string;
}


// define the schema for the User model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: { 
    type: String, 
    required: false 
  }

});

export const UserModel: Model<User> = mongoose.model<User>('User', userSchema);
