"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const secrets_1 = require("./util/secrets");
const collegeRouter_1 = __importDefault(require("./routers/collegeRouter"));
const studentRouter_1 = __importDefault(require("./routers/studentRouter"));
const app = (0, express_1.default)();
mongoose_1.default
    .connect(secrets_1.MONGODB_URI)
    .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
})
    .catch((err) => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    process.exit(1);
});
app.set('port', process.env.PORT || 3001);
app.use((0, cors_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/college/', collegeRouter_1.default);
app.use('/student/', studentRouter_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map