"use strict";
// data.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// define the schema for the User model
const dataSchema = new mongoose_1.default.Schema({
    UID: {
        type: String,
    },
    Age: {
        type: Number,
    },
});
exports.DataModel = mongoose_1.default.model('Data', dataSchema);
