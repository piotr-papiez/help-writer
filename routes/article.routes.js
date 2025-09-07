import { Router } from "express";

import {
    loadArticle,
    loadArticles,
    createArticle,
    updateArticle
} from "../controllers/article.controller.js";

const router = Router();

router.get("/articles/:articleId", loadArticle);
router.get("/articles", loadArticles);

router.post("/articles", createArticle);

router.put("/articles/:articleId", updateArticle);

export default router;