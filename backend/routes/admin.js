import express from 'express';

import {
    loginFunc,
    signinFunc,
    changePass,
    profile,
    dashboardAPI,
    getUsers,
    getStudents,
    logout
} from '../controllers/admin.js';

import { isAuthenticated } from '../auth/auth.js';
import { upload } from '../utils/multer.js';

const router = express.Router()


router.post('/login', loginFunc)  //tested
router.post('/register', signinFunc)  //tested
router.put('/changepass', isAuthenticated, changePass);//tested
router.get('/profile', isAuthenticated, profile); //tested
router.post('/upload', isAuthenticated, upload.single('file'), dashboardAPI);//tested
router.get('/getallusers', isAuthenticated, getUsers);
router.get('/fetchStudents', isAuthenticated, getStudents); //tested

router.get('/logout', logout);   //tested


export default router;