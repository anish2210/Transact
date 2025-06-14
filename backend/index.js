const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());
app.use(express.json()); //body-parser

const mainRouter = require("./routes/index");

// const app = express();

app.use("/api/v1", mainRouter);

app.listen(PORT, ()=>{
    console.log(`✅ Server is running at http://localhost:${PORT}`)
});
