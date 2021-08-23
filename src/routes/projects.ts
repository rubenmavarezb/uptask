import express from 'express';
//////////////////////////////////////////////////////////////
import { projectsHome, newProject, postNewProject } from '../controllers/projectsController';

const projectsRouter = express.Router();

projectsRouter.get('/', projectsHome);
projectsRouter.get('/new-project', newProject)
projectsRouter.post('/new-project', postNewProject)

export default projectsRouter;