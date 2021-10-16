"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const studentSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: true },
    Name: { type: String, required: true },
    Batch: { type: Number, required: true },
    CollegeId: {
        type: Number,
        ref: 'College',
        required: true,
    },
    Skills: String,
}, {
    collection: 'students',
});
exports.Student = mongoose_1.default.model('Student', studentSchema);
//# sourceMappingURL=Student.js.map