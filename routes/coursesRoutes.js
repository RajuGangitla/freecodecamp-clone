import express from 'express'
import { courseCreate, getAllCourses } from '../controllers/courseController.js'

const router = express.Router()

router.route('/create').post(courseCreate)
router.route('/getAllCourses').get(getAllCourses)


export default router