import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => {
      const date = new Date();
      // Get the timezone offset for Indian Standard Time (IST) in milliseconds
      const timeZoneOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
      // Apply the offset to the current date
      const indianDate = new Date(date.getTime() + timeZoneOffset);
      return indianDate;
    },
  },
});

export default mongoose.model("Admin", adminSchema);
