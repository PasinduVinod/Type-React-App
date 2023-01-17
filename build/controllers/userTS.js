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
exports.userController = exports.UserController = void 0;
const userTS_1 = require("../service/userTS");
class UserController {
    // private userService: UserService;
    // constructor() {
    // this.userService = new UserService();
    // }
    Register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            // check input validity
            console.log((email && password));
            if (!(email && password)) {
                res.status(400).send("Both email and password required");
            }
            else {
                const userService = new userTS_1.UserService();
                const user = yield userService.createUser(email, password);
                res.json(user);
            }
        });
    }
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            // check input validity
            if (!(email && password)) {
                res.status(400).send("Both email and password required");
            }
            else {
                const userService = new userTS_1.UserService();
                const user = yield userService.LoginUser(email, password);
                if (user !== "failed") {
                    res.status(200).json(user);
                }
                else {
                    res.status(400).send("Invalid Credentials");
                }
            }
        });
    }
}
exports.UserController = UserController;
exports.userController = new UserController();
