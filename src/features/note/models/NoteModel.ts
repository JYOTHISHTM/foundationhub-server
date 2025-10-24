

import mongoose, { Schema, Document } from "mongoose";
import { NoteEntity } from "../../../core/entities/NoteEntity.js";

export interface INoteDoc extends NoteEntity, Document {}

const NoteSchema = new Schema<INoteDoc>({
  slug: { type: String, required: true, unique: true },
  blocks: [
    {
      type: { 
        type: String,
        enum: ["mainHeading", "sideHeading", "text", "practical", "image", "points"],
        required: true,
      },
      value: { 
        type: Schema.Types.Mixed, 
        required: true 
      },
      color: {
        type: String,
        enum: ["white", "yellow", "green"],
        default: "white",
        required: false
      },
      _id: false
    },
  ],
}, { timestamps: true });

export default mongoose.model<INoteDoc>("Note", NoteSchema);