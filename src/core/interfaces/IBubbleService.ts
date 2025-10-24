import { BubbleEntity } from "../entities/BubbleEntity.js";

export interface IBubbleService {
  getAllBubbles(): Promise<BubbleEntity[]>;
  createBubble(bubble: BubbleEntity): Promise<BubbleEntity>;
}
