"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRepository = void 0;
const dataTS_1 = require("../models/dataTS");
const mongoose = require('mongoose');
class DataRepository {
    create(UID, Age) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(UID, Age);
            const data = new dataTS_1.DataModel({ UID, Age });
            try {
                yield data.save();
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    edit(id, UID, Age) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield dataTS_1.DataModel.findOne({ _id: id, UID: UID });
                if (!data) {
                    throw new Error('Data not found');
                }
                data.Age = Age;
                console.log("Data " + data);
                yield data.save();
                return data;
            }
            catch (error) {
                console.log("Error in edit repo");
                throw error;
            }
        });
    }
    find(UID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield dataTS_1.DataModel.find({ UID });
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    findSpecial(id, UID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield dataTS_1.DataModel.findOne({ _id: id, UID: UID });
                console.log(data);
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield dataTS_1.DataModel.findByIdAndDelete(id);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.DataRepository = DataRepository;
