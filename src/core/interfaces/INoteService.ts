import { NoteEntity } from "../entities/NoteEntity.js";

export interface INoteService {
  getNoteBySlug(slug: string): Promise<NoteEntity | null>;
  addBlockToNote(slug: string, type: string, value: string): Promise<NoteEntity>;

  updateBlockInNote(slug: string, index: number, type: string, value: string,color?:string): Promise<NoteEntity>;

}
