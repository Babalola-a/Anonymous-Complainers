import express from 'express'; 
import cors from 'cors'; 
import helmet from "helmet"; 
import path from "path";

const app = express(); 

app.use (cors());
app.use(helmet());
app.use(express.json());

const router = express.Router();

router.route("/").get((req, res) => {
  res.sendFile(path.resolve() + "/index.html");
});

app.use("/", router);

const HOSTNAME = "localhost";
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

