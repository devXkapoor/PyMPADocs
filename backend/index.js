const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {});

app.post("/api/addStep", (req, res) => {

  
});

app.put("/api", (req, res) => {});

app.delete("/api", (req, res) => {});



app.listen(3000, () => {
  console.log("App is listening on Port 3000!");
});
