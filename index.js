const cors = require("cors");
const express = require("express");
const connect = require("./config/db");
const adminRouter=require("./src/Admin/adminRoute/adminRoute")
const userRouter = require("./src/user/UserRoutes/user.route");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/admin",adminRouter)

app.get("/", (req, res) => {
  res.send("Hello World WORKINGG");
});

app.listen(process.env.PORT || 8000, async () => {
  try {
    await connect;
  } catch {
    console.log("Could not connect to database");
  }
  console.log(`Server listening on port ${process.env.PORT || 8000}`);
});
