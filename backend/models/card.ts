import mongoose, { model, Schema } from "mongoose";
import { mongooseHelper } from "../helper";

const CardSchema = new Schema({
  owner: { type: mongoose.Types.ObjectId || String, required: true },
  provider: { type: String, required: true },
  method: { type: String, unique: true },
  brand: String,
  last4: { type: String, length: 4 },
  expMonth: { type: Number, required: true },
  expYear: { type: Number, required: true },
});

(CardSchema as any).post("save", mongooseHelper);

const Card = model("card", CardSchema);

export default Card;
