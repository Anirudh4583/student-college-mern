"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByCourse = exports.getByState = exports.getGroupCourse = exports.getGroupState = exports.getSimilar = exports.getAll = void 0;
const college_1 = require("../models/college");
const getAll = (req, res, next) => {
    college_1.College.find((error, data) => {
        if (error)
            return next(error);
        return res.json(data);
    });
};
exports.getAll = getAll;
const getSimilar = (req, res, next) => {
    const { collegeId } = req.body;
    // console.log(collegeId)
    college_1.College.findOne({ id: collegeId }, (error, data) => {
        if (error)
            return next(error);
        college_1.College.find({
            id: { $ne: collegeId },
            State: data.State,
            Courses: data.Courses,
        }, (error, data) => {
            if (error)
                return next(error);
            // console.log('similar colleges 🤘', data)
            return res.json(data);
        });
    });
    // College.find((error: NativeError, data: CollegeDoc) => {
    //   if (error) return next(error)
    //   return res.json(data)
    // })
};
exports.getSimilar = getSimilar;
const getGroupState = (req, res, next) => {
    let docs = college_1.College.aggregate([{ $group: { _id: '$State', count: { $count: {} } } }], (error, data) => {
        if (error)
            return next(error);
        // console.log('data', data)
        let newData = JSON.stringify(data).split('"_id":').join('"name":');
        newData = newData.split('"count":').join('"value":');
        newData = JSON.parse(newData);
        return res.json(newData);
    });
};
exports.getGroupState = getGroupState;
const getGroupCourse = (req, res, next) => {
    let docs = college_1.College.aggregate([{ $group: { _id: '$Courses', count: { $count: {} } } }], (error, data) => {
        if (error)
            return next(error);
        // console.log('data', data)
        let newData = JSON.stringify(data).split('"_id":').join('"name":');
        newData = newData.split('"count":').join('"value":');
        newData = JSON.parse(newData);
        return res.json(newData);
    });
};
exports.getGroupCourse = getGroupCourse;
const getByState = (req, res, next) => {
    const { State } = req.body;
    college_1.College.find({
        State: State,
    }, (error, data) => {
        if (error)
            return next(error);
        // console.log('states colleges 🤘', data)
        return res.json(data);
    });
};
exports.getByState = getByState;
const getByCourse = (req, res, next) => {
    const { Courses } = req.body;
    college_1.College.find({
        Courses: Courses,
    }, (error, data) => {
        if (error)
            return next(error);
        console.log('courses colleges 🤘', data);
        return res.json(data);
    });
};
exports.getByCourse = getByCourse;
//# sourceMappingURL=CollegeController..js.map