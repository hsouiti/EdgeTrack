import {NextFunction, Request, Response} from "express";
import { config } from "@/config";
/**
 * @description Get all connected devices
 * @routes GET /api/v1/devices
 * @access public
 */
export const getAllConnectedDevices = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
          res.status(200).json({
          message: "Connection successful",
            websocket_url: `${config.webSocket_URL}`
          });
        
    } catch (error: any) {
        console.error('Error fetching devices:', error);

    res.status(500).json({
      statusCode: 500,
      message: 'Something went wrong',
      error: error.message || error,
    });
    }
}