import mongoose from "mongoose";

mongoose.connect(process.env.DB_URI, {});

const profitOfDaySchema = new mongoose.Schema(
  {
    dataBase: {
      type: String,
      required: true,
    },
    valorTotal: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const profitOfDay = mongoose.model("profitOfDay", profitOfDaySchema);

export default profitOfDay;
