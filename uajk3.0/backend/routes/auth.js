import express from 'express';
import multer from 'multer';
import path from 'path';
import { signupUser, loginUser, loginAdmin, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Configure multer storage to save files with original name and extension
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/uploads/');
  },
  filename: (req, file, cb) => {
    // Preserve original filename and extension
    const originalName = path.parse(file.originalname).name;
    const originalExt = path.extname(file.originalname);
    // cb(null, `${originalName}-${Date.now()}${originalExt}`);
    cb(null, `${originalName}${originalExt}`);
  }
});

const upload = multer({ storage: storage });

// Define routes
router.post('/signup', signupUser);

router.post('/register', upload.fields([
  { name: 'profilePhoto', maxCount: 1 },
  { name: 'matricDMCPhoto', maxCount: 1 },
  { name: 'fscDMCPhoto', maxCount: 1 },
  { name: 'transcriptPhoto', maxCount: 1 }
]), registerUser);

router.post('/login', loginUser);
router.post('/adminlogin', loginAdmin);

export default router;
