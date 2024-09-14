import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/SocialApp'
    );

    console.log(
      `MongoDB successfully connected to ${connection.connection.host}`
    );
  } catch (error) {
    console.error('There was an error processing the mongodb connection.');
    process.exit(1);
  }
};

export default connectDB;
