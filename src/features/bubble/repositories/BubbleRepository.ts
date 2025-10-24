import { IBubbleRepository } from "../../../core/interfaces/IBubbleRepository.js";
import { BubbleEntity } from "../../../core/entities/BubbleEntity.js";
import BubbleModel, { IBubbleDoc } from "../models/BubbleModel.js";

export class BubbleRepository implements IBubbleRepository {
  async findAll(): Promise<BubbleEntity[]> {
    const docs: IBubbleDoc[] = await BubbleModel.find();
    return docs.map(doc => new BubbleEntity(doc.toObject()));
  }

  async add(bubble: BubbleEntity): Promise<BubbleEntity> {
    const doc = new BubbleModel(bubble);
    await doc.save();
    return new BubbleEntity(doc.toObject());
  }
}
