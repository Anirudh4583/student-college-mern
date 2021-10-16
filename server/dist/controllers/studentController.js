"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromCollege = exports.getAll = void 0;
const Student_1 = require("../models/Student");
const getAll = (req, res, next) => {
    Student_1.Student.find((error, data) => {
        if (error)
            return next(error);
        console.log(data);
        return res.json(data);
    }).limit(100);
};
exports.getAll = getAll;
const getFromCollege = (req, res, next) => {
    const { collegeId } = req.body;
    console.log(collegeId);
    Student_1.Student.find({ CollegeId: collegeId }, (error, data) => {
        if (error)
            return next(error);
        // console.log('students of college 🤘', data)
        return res.json(data);
    });
    // College.find((error: NativeError, data: CollegeDoc) => {
    //   if (error) return next(error)
    //   return res.json(data)
    // })
};
exports.getFromCollege = getFromCollege;
//# sourceMappingURL=studentController.js.map