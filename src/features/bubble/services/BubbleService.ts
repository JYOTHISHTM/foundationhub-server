import { IBubbleService } from "../../../core/interfaces/IBubbleService.js";
import { IBubbleRepository } from "../../../core/interfaces/IBubbleRepository.js";
import { BubbleEntity } from "../../../core/entities/BubbleEntity.js";

export class BubbleService implements IBubbleService {
  private repo: IBubbleRepository;

  constructor(repo: IBubbleRepository) {
    this.repo = repo;
  }

  getAllBubbles(): Promise<BubbleEntity[]> {
    return this.repo.findAll();
  }

  createBubble(bubble: BubbleEntity): Promise<BubbleEntity> {
    return this.repo.add(bubble);
  }
}
