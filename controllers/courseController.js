import coursesModel from "../models/coursesModel.js";

const courseCreate = async (req, res) => {
  try {
    const course = await coursesModel.create(req.body);
    res.status(201).send({ message: "new course created", course });
  } catch (error) {
    res.status(500).send({ message: `${error.message}` });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await coursesModel.find({});
    res
      .status(200)
      .send({ message: "All courses fetched successfully", courses });
  } catch (error) {
    res.status(500).send({ message: `${error.message}` });
  }
};

export { courseCreate, getAllCourses };
