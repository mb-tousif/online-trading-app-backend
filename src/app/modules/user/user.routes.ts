import express from 'express';
import AuthPermission from '../../middleware/authPermission';
import { ENUM_USER_ROLE } from '../../../enums';
import { UserControllers } from './user.controller';

const router = express.Router();

router.get('/',
AuthPermission(ENUM_USER_ROLE.ADMIN),
UserControllers.getAllUsers);
router.get('/:id',
AuthPermission(ENUM_USER_ROLE.ADMIN),
UserControllers.getUserById);

export const userRoutes = router;