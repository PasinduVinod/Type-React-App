// data.ts

import mongoose, { Model, Document } from 'mongoose';

export interface Data extends Document {
  UID: String;
  Age: Number;
}


// define the schema for the User model
const dataSchema = new mongoose.Schema({
    UID: {
        type: String,
      },
      Age: {
        type: Number,
      },

});

export const DataModel: Model<Data> = mongoose.model<Data>('Data', dataSchema);
