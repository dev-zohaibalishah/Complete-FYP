import Admission from '../models/Admission.js';

// Function to get all admissions
export const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to get a specific admission by CNIC
export const getAdmissionById = async (req, res) => {
  const { cnic } = req.params;

  try {
    const admission = await Admission.findOne({ cnic });
    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' });
    }
    res.json(admission);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

