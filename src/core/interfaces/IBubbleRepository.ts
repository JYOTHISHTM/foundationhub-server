import { BubbleEntity } from "../entities/BubbleEntity.js";

export interface IBubbleRepository {
  findAll(): Promise<BubbleEntity[]>;
  add(bubble: BubbleEntity): Promise<BubbleEntity>;
}
