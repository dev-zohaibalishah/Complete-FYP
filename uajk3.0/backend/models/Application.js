import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  cnic: { type: String, unique: true, required: true },
  matricMarks: Number,
  fscMarks: Number,
  profilePhoto: String,
  matricDMC: String,
  fscDMC: String,
  departments: [String],
  status: { type: String, default: 'Pending' }
});

export default mongoose.model('Application', applicationSchema);
