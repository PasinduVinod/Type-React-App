import {DataModel, Data } from "../models/dataTS";

const mongoose = require('mongoose');

export class DataRepository {
     async create(UID: string, Age: number): Promise<Data> {
        console.log(UID, Age)        
        const data = new DataModel({ UID, Age });
        try {
            await data.save();
            return data;
        } catch (error) {
            throw error;
        }
    }

    async edit(id: string, UID:string, Age: number) { //edit
        try {
          const data = await DataModel.findOne({ _id:id, UID:UID });
          if (!data) {
            throw new Error('Data not found');
          }
          data.Age = Age;
          console.log("Data "+data)
          await data.save();
          return data;
        } catch (error) {
          console.log("Error in edit repo")
          throw error;
        }
      }
    
      async find(UID: string) { //retrieve all
        try{
            const data = await DataModel.find({ UID });
            return data;
          } catch (error) {
            throw error;
          }
      }
    
      async findSpecial(id: string, UID: string){ //retrieve special one
        try{
          const data = await DataModel.findOne({ _id:id, UID:UID });
          console.log(data)
          return data;
        }catch (error) {
          throw error;
        }
      }
    
      async delete(id: string) { //delete special one
        try {
            await DataModel.findByIdAndDelete(id);
            } catch (error) {
            throw error;
            }
      }
}