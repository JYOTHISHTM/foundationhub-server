import { INoteService } from "../../../core/interfaces/INoteService.js";
import { INoteRepository } from "../../../core/interfaces/INoteRepository.js";
import { NoteEntity } from "../../../core/entities/NoteEntity.js";

export class NoteService implements INoteService {
  private repo: INoteRepository;

  constructor(repo: INoteRepository) {
    this.repo = repo;
  }

  getNoteBySlug(slug: string): Promise<NoteEntity | null> {
    return this.repo.findBySlug(slug);
  }

  addBlockToNote(slug: string, type: string, value: string): Promise<NoteEntity> {
    return this.repo.addBlock(slug, type, value);
  }
 updateBlockInNote(
    slug: string,
    index: number,
    type: string,
    value: string,
    color?: string
  ): Promise<NoteEntity> {
    return this.repo.updateBlock(slug, index, type, value, color);
  }
}

