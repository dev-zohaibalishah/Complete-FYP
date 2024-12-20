import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  cnic: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  matricMarks: { type: Number, required: true },
  fscMarks: { type: Number, required: true },
  degreeProgram: { type: String, required: true },
  department1: { type: String, required: true }, 
  department2: { type: String },                 
  department3: { type: String }, 
  profilePhoto: { type: String, required: true },
  matricDMCPhoto: { type: String, required: true },
  fscDMCPhoto: { type: String, required: true },
  transcriptPhoto: { type: String },
}, { timestamps: true });

const Admission = mongoose.model('Admission', admissionSchema);
export default Admission;
