import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    databaseURL: process.env.DATABASE_URL as string,
    nodeEnv: process.env.NODE_ENV || 'development'
}