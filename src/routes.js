import { Router } from 'express';
import multer from 'multer';
import cors from 'cors';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import Session from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import authMiddleware from './app/middlewares/auth';
import AppointmentsController from './app/controllers/AppointmentController';

const routes = new Router();
const upload = multer(multerConfig);

// routes.use(cors());
routes.post('/users', UserController.store);
routes.post('/sessions', Session.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentsController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
