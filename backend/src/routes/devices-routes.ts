import express, {NextFunction,Request, response, Router} from 'express'

export const devicesRoutes:Router = express.Router();

devicesRoutes.get('/devices', (req, res) => {
    res.send('devices')
}    
)

