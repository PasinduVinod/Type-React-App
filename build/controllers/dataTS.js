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
exports.DataController = void 0;
const dataTS_1 = require("../service/dataTS");
const Auth_1 = require("../Middlewares/Auth");
class DataController {
    constructor() {
        this.auth = new Auth_1.Auth();
    }
    createData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the token from the request header
            const token = req.header('Authorization');
            // If there is no token, return an error
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            else {
                try {
                    // Verify the token
                    const user = yield this.auth.verifyToken(token);
                    // console.log("User: "+user);
                    const uid = user._id;
                    const { Age } = req.body;
                    // check input validity
                    if (!(Age)) {
                        res.status(400).send("Age required");
                    }
                    else {
                        const dataServise = new dataTS_1.DataService;
                        //call createData function
                        const data = yield dataServise.createData(uid, Age);
                        res.json(data);
                    }
                }
                catch (error) {
                    res.json({ message: "Error in authenticatoin" });
                }
            }
        });
    }
    editData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the token from the request header
            const token = req.header('Authorization');
            // If there is no token, return an error
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            else {
                try {
                    // Verify the token
                    const user = yield this.auth.verifyToken(token);
                    // console.log("User: "+user);
                    const uid = user._id;
                    const { id, Age } = req.body;
                    // check input validity
                    if (!(Age)) {
                        res.status(400).send("Age required");
                    }
                    else {
                        //call createData function
                        try {
                            const dataServise = new dataTS_1.DataService;
                            const data = yield dataServise.editData(id, uid, Age);
                            res.json(data);
                        }
                        catch (error) {
                            console.log("Error in function call");
                        }
                    }
                }
                catch (error) {
                    res.json({ message: "Error in authenticatoin" });
                }
            }
        });
    }
    ViewData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.header('Authorization');
            // If there is no token, return an error
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            else {
                try {
                    // Verify the token
                    const user = yield this.auth.verifyToken(token);
                    // console.log("User: "+user);
                    const uid = user._id;
                    //call createData function
                    try {
                        const dataServise = new dataTS_1.DataService;
                        const data = yield dataServise.FindData(uid);
                        res.json(data);
                    }
                    catch (error) {
                        console.log("Error in function call");
                    }
                }
                catch (error) {
                    res.json({ message: "Error in authenticatoin" });
                }
            }
        });
    }
    ViewOneData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.header('Authorization');
            // If there is no token, return an error
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            else {
                try {
                    // Verify the token
                    const user = yield this.auth.verifyToken(token);
                    const { id } = req.body;
                    const uid = user._id;
                    // check input validity
                    if (!(id)) {
                        res.status(400).send("id required");
                    }
                    //call createData function
                    try {
                        const dataServise = new dataTS_1.DataService;
                        const data = yield dataServise.FindSpecial(id, uid);
                        res.json(data);
                    }
                    catch (error) {
                        console.log("Error in function call");
                    }
                }
                catch (error) {
                    res.json({ message: "Error in authenticatoin" });
                }
            }
        });
    }
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.header('Authorization');
            // If there is no token, return an error
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            else {
                try {
                    // Verify the token
                    const user = yield this.auth.verifyToken(token);
                    const id = req.params.id;
                    //call createData function
                    const dataServise = new dataTS_1.DataService;
                    const data = yield dataServise.DeleteData(id);
                    res.json(data);
                }
                catch (error) {
                    res.json({ message: "Error in authenticatoin" });
                }
            }
        });
    }
}
exports.DataController = DataController;
