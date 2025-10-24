import { INoteRepository } from "../../../core/interfaces/INoteRepository.js";
import { NoteEntity } from "../../../core/entities/NoteEntity.js";
import NoteModel, { INoteDoc } from "../models/NoteModel.js";

export class NoteRepository implements INoteRepository {
  async findBySlug(slug: string): Promise<NoteEntity | null> {
    const doc: INoteDoc | null = await NoteModel.findOne({ slug });
    return doc ? new NoteEntity(doc.toObject()) : null;
  }

  async addBlock(slug: string, type: string, value: string): Promise<NoteEntity> {
    let note = await NoteModel.findOne({ slug });
    if (!note) note = new NoteModel({ slug, blocks: [] });
    note.blocks.push({ type, value });
    await note.save();
    return new NoteEntity(note.toObject());
  }


  async updateBlock(
    slug: string,
    index: number,
    type: string,
    value: string,
    color?: "white" | "yellow" | "green"
  ): Promise<NoteEntity> {
    const note = await NoteModel.findOne({ slug });
    if (!note) throw new Error("Note not found");

    if (index < 0 || index >= note.blocks.length) {
      throw new Error("Invalid block index");
    }

    // Update only the fields we want
    note.blocks[index].type = type;
    note.blocks[index].value = value;
    if (color) note.blocks[index].color = color;

    await note.save();

    return new NoteEntity(note.toObject());
  }

}
