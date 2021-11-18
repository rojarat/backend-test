const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(
  cors({
    // todo ใส่ whitelist
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
app.get("/", (req, res) => res.send("API Running"));

app.use("/api/textdata", require("./routes/api/textdata"));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
