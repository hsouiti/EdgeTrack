import {NextFunction, Request, Response} from "express";

export const getAllConnectedDevices = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(200).json({
        statusCode: 200,
        message: 'All connected devices',
    });
}