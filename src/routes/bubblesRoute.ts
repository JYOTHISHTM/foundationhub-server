import { Router } from "express";
import { BubbleController } from "../features/bubble/controllers/BubbleController.js";
import { BubbleService } from "../features/bubble/services/BubbleService.js";
import { BubbleRepository } from "../features/bubble/repositories/BubbleRepository.js";

const repo = new BubbleRepository();
const service = new BubbleService(repo);
const controller = new BubbleController(service);

const router = Router();

router.get("/all", controller.getAll);
router.post("/add", controller.add);

export default router;
