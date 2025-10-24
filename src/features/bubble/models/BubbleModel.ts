import mongoose, { Schema, Document } from "mongoose";
import { BubbleEntity } from "../../../core/entities/BubbleEntity.js";

export interface IBubbleDoc extends BubbleEntity, Document {}

const BubbleSchema = new Schema<IBubbleDoc>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  src: { type: String, required: true },
  size: { type: Number, default: 120 },
  left: { type: String, default: "10%" },
  top: { type: String, default: "10%" },
});

export default mongoose.model<IBubbleDoc>("Bubble", BubbleSchema);
