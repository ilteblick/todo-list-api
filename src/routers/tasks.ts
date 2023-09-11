import express from 'express'
import * as controller from '../controllers/tasks'

const router = express.Router()

router.get("/", controller.getTasks)
router.post("/", controller.createTask)
router.put("/:id", controller.editTask)
router.delete("/:id", controller.deleteTask)

export default router

