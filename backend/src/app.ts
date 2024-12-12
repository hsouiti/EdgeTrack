import express from 'express';
import { devicesRoutes } from '@/routes';


const app = express()

app.disable('x-powered-by')
.use(express.json())
.use(express.urlencoded())


// routes
app.use('/api/v1',devicesRoutes);

app.use((req, res) => {
    res.status(404).send("404 - Route not found");
})

export default app