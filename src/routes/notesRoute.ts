import { Router } from "express";
import { NoteController } from "../features/note/controllers/NoteController.js";
import { NoteService } from "../features/note/services/NoteService.js";
import { NoteRepository } from "../features/note/repositories/NoteRepository.js";

const repo = new NoteRepository();
const service = new NoteService(repo);
const controller = new NoteController(service);

const router = Router();

router.get("/:slug", controller.getNoteBySlug);
router.post("/:slug", controller.addBlock);

router.put("/:slug/:index", (req, res, next) => {
  console.log("🔵 PUT route matched!");
  console.log("PUT params:", req.params);
  next();
}, controller.updateBlock);
export default router;
