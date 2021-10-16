"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const constants_1 = require("./constants");
dotenv_1.default.config();
console.log(process.env['MONGODB_URI_LOCAL']);
exports.MONGODB_URI = constants_1.__prod__
    ? process.env['MONGODB_URI']
    : process.env['MONGODB_URI_LOCAL'];
if (!exports.MONGODB_URI) {
    if (constants_1.__prod__)
        console.error('No mongo connection string. Set MONGODB_URI environment variable.');
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map