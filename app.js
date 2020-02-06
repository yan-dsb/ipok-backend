const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

const DoctorRoutes = require("./routes/DoctorRoutes");
const IndexRoutes = require("./routes/IndexRoutes");

app.use(DoctorRoutes);
app.use(IndexRoutes);

app.get("*", (req, res) => {
  console.log("Page not found 404");
});

app.listen("3000", () => {
  console.log("App is listening on port 3000");
});
