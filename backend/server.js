
import { app } from "./index.js";
import { ConnectDB } from "./database/db.js";


ConnectDB();

app.listen(process.env.PORT, () => {
    console.log(`the app is running at port: ${process.env.PORT}`);

})