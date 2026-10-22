// src/routes/userRoutes.ts
import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();

// GET /api/users
router.get('/', UserController.getAll);

// GET /api/users/:id
router.get('/:id', UserController.getById);

// POST /api/users
router.post('/', UserController.create);

// PUT /api/users/:id
router.put('/:id', UserController.update);

// DELETE /api/users/:id
router.delete('/:id', UserController.delete);

export default router;