import 'module-alias/register';
import app from "@/app";
import { config } from "@/config";

app.listen(config.port, () => { 
    console.log(`Server started on port ${config.port}`);       
})