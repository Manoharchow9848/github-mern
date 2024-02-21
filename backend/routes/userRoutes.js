import express from 'express'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js';
import { getUserProfileAndRepos } from '../controllers/userController.js';
import { likeProfile,getLikes } from '../controllers/userController.js';
const router = express.Router();

router.get("/profile/:username",getUserProfileAndRepos)
router.get("/likes", ensureAuthenticated,getLikes);
router.post("/like/:username", ensureAuthenticated,likeProfile);

export default router;