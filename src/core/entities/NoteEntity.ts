export interface INoteBlock {
  type: string;
  value: string | string[];
  color?: "white" | "yellow" | "green"; // optional
}

export class NoteEntity {
  slug: string;
  blocks: INoteBlock[];

  constructor(data: Partial<NoteEntity>) {
    this.slug = data.slug || "";
    this.blocks = data.blocks || [];
  }
}
