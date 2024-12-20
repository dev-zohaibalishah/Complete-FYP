import User from '../models/User.js';
import Admission from '../models/Admission.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// User Signup function
export const signupUser = async (req, res) => {
  const { cnic, name, fatherName, phone, email, password, isAdmin } = req.body;

  try {
    // Check if CNIC already exists in Users
    const existingUser = await User.findOne({ cnic });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this CNIC already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      cnic,
      name,
      fatherName,
      phone,
      email,
      password: hashedPassword,
      isAdmin,
    });

    await newUser.save();
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// User Login function
export const loginUser = async (req, res) => {
  const { cnic, password } = req.body;

  try {
    const user = await User.findOne({ cnic });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin Login function
export const loginAdmin = async (req, res) => {
  const { cnic, password } = req.body;

  try {
    const user = await User.findOne({ cnic, isAdmin: true });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    console.error('Error during admin login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Register User function for admission (without password)
export const registerUser = async (req, res) => {
  const { name, fatherName, cnic, phone, email, matricMarks, fscMarks, degreeProgram, department1, department2, department3 } = req.body;

  try {
    // Check if CNIC already exists in Admission
    const existingAdmission = await Admission.findOne({ cnic });
    if (existingAdmission) {
      return res.status(400).json({ message: 'CNIC already registered for admission' });
    }

    // Create new admission entry
    const admission = new Admission({
      name,
      fatherName,
      cnic,
      phone,
      email,
      matricMarks,
      fscMarks,
      degreeProgram,
      department1,
      department2,
      department3,
      profilePhoto: req.files['profilePhoto'] ? req.files['profilePhoto'][0].path : null,
      matricDMCPhoto: req.files['matricDMCPhoto'] ? req.files['matricDMCPhoto'][0].path : null,
      fscDMCPhoto: req.files['fscDMCPhoto'] ? req.files['fscDMCPhoto'][0].path : null,
      transcriptPhoto: req.files['transcriptPhoto'] ? req.files['transcriptPhoto'][0].path : null,
    });

    await admission.save();
    res.status(201).json({ message: 'User registered successfully for admission' });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};



