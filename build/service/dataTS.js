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
exports.DataService = void 0;
const dataTS_1 = require("../repository/dataTS");
class DataService {
    constructor() {
        this.dataRepository = new dataTS_1.DataRepository;
    }
    createData(uid, Age) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Working");
            const data = yield this.dataRepository.create(uid, Age); //save data details
            return data;
        });
    }
    editData(id, uid, Age) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.dataRepository.edit(id, uid, Age); //save data details
            return data;
        });
    }
    FindData(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.dataRepository.find(uid);
            return data;
        });
    }
    FindSpecial(id, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.dataRepository.findSpecial(id, uid);
            return data;
        });
    }
    DeleteData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.dataRepository.delete(id);
            return data;
        });
    }
}
exports.DataService = DataService;
