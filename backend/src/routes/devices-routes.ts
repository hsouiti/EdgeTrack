import express, {NextFunction,Request, response, Router} from 'express'
import { getAllConnectedDevices } from '@/controllers';

export const devicesRoutes:Router = express.Router();

devicesRoutes.get('/devices', getAllConnectedDevices)

