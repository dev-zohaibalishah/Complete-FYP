import Admission from '../models/Admission.js';

// Get all admissions
export const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.status(200).json(admissions);
  } catch (error) {
    console.error('Error fetching admissions:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific admission by CNIC
export const getAdmissionById = async (req, res) => {
  const { cnic } = req.params;

  try {
    const admission = await Admission.findOne({ cnic });
    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' });
    }
    res.status(200).json(admission);
  } catch (error) {
    console.error('Error fetching admission:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
