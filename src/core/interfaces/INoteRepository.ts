import { NoteEntity } from "../entities/NoteEntity.js";

export interface INoteRepository {
  findBySlug(slug: string): Promise<NoteEntity | null>;
  addBlock(slug: string, type: string, value: string): Promise<NoteEntity>;

  updateBlock(slug: string, index: number, type: string, value: string,color?:string): Promise<NoteEntity>;

}
