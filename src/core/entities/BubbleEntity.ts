export class BubbleEntity {
  name: string;
  slug: string;
  src: string;
  size: number;
  left: string;
  top: string;

  constructor(data: Partial<BubbleEntity>) {
    this.name = data.name || "";
    this.slug = data.slug || "";
    this.src = data.src || "";
    this.size = data.size || 120;
    this.left = data.left || "10%";
    this.top = data.top || "10%";
  }
}
