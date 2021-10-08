import mongoose from "mongoose";

mongoose.connect(process.env.DB_URI, {});

export default mongoose;
