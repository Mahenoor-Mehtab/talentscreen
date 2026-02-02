import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);

    console.log(`MongoDB Connected🟢`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // 0 means sucess , 1 means failure
  }
};

export default connectDB
