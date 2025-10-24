import { Request, Response } from "express";
import { INoteService } from "../../../core/interfaces/INoteService.js";

export class NoteController {
  private service: INoteService;

  constructor(service: INoteService) {
    this.service = service;
  }

  getNoteBySlug = async (req: Request, res: Response) => {
    try {
      const note = await this.service.getNoteBySlug(req.params.slug);
      if (!note) return res.status(404).json({ message: "Note not found" });
      res.json(note);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch note" });
    }
  };

  addBlock = async (req: Request, res: Response) => {
    try {
      const { type, value } = req.body;
      const note = await this.service.addBlockToNote(req.params.slug, type, value);
      res.json(note);
    } catch (err) {
      res.status(400).json({ error: "Failed to add block" });
    }
  };

 updateBlock = async (req: Request, res: Response) => {
    console.log("✅✅✅ updateBlock CONTROLLER CALLED ✅✅✅");
    console.log("Request params:", req.params);
    console.log("Request body:", req.body);

    try {
      const { type, value, color } = req.body;
      const { slug, index } = req.params;

      const note = await this.service.updateBlockInNote(
        slug,
        Number(index),
        type,
        value,
        color
      );

      console.log("✅ Update successful!");
      res.json(note);
    } catch (err) {
      console.error("❌ Error in updateBlock:", err);
      res.status(400).json({ error: "Failed to update block", details: String(err) });
    }
  };

}
