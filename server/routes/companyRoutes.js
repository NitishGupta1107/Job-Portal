import express from 'express'
import { ChangeJobApplicationStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, login, postJob, registerComapny } from '../controllers/companyController.js';
import upload from '../config/multer.js';
import { protectCompany } from '../middlewares/AuthMiddleware.js';
const router = express.Router();



// Register a company
router.post('/register',upload.single('image'),registerComapny)

// Company Login
router.post('/login',login)

// Get company data
router.get('/company',protectCompany,getCompanyData)

// Post a job
router.post('/post-job',protectCompany,postJob)

// Get Applicants Data of Company
router.get('/applicants',protectCompany,getCompanyJobApplicants)

// Get company Job list

router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

// Change application status
router.post('/change-status',protectCompany,ChangeJobApplicationStatus)

// change applications visibilty
router.post('/change-visiblity',protectCompany,changeVisiblity)



export default router


