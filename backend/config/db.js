import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://shareenpan2:Fgouter55@cluster0.s3dpu.mongodb.net/pachadi'; // paste your MongoDB URI here

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected'.green);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

export default connectDB;
