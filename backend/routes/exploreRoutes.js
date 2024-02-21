import express from 'express';
import { explorePopularRepos } from '../controllers/exploreController.js';

const router = express.Router();

router.get("/repos/:language",explorePopularRepos)

export default router;