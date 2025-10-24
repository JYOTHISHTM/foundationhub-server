import { Request, Response } from "express";
import { IBubbleService } from "../../../core/interfaces/IBubbleService.js";
import { BubbleEntity } from "../../../core/entities/BubbleEntity.js";

export class BubbleController {
  private service: IBubbleService;

  constructor(service: IBubbleService) {
    this.service = service;
  }

  getAll = async (_req: Request, res: Response) => {
    try {
      const bubbles = await this.service.getAllBubbles();
      res.json(bubbles);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch bubbles" });
    }
  };

  add = async (req: Request, res: Response) => {
    try {
      const bubble = new BubbleEntity(req.body);
      const created = await this.service.createBubble(bubble);
      res.json(created);
    } catch (err) {
      res.status(400).json({ error: "Failed to save bubble" });
    }
  };
}
