import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  cnic: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  profilePhoto: { type: String }, 
  matricDMCPhoto: { type: String }, 
  fscDMCPhoto: { type: String }, 
  transcriptPhoto: { type: String }, 
}, { timestamps: true });

export default mongoose.model('User', userSchema);
