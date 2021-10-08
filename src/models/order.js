import mongoose from "../database/mongodb.js";

const DealSchema = new mongoose.Schema(
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

const Deal = mongoose.model("Deal", DealSchema);

export default Deal;
