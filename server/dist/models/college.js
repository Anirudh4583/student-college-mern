"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.College = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const collegeSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: true },
    Name: { type: String, required: true, unique: true },
    YearFounded: { type: Number, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    Country: { type: String, required: true },
    NoOfStudents: { type: Number, required: true },
    Courses: String,
}, {
    collection: 'colleges',
});
exports.College = mongoose_1.default.model('College', collegeSchema);
//# sourceMappingURL=college.js.map