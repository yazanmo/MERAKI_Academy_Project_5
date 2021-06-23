const express = require("express");
require("dotenv").config();
require("./db/db");
const cors = require("cors");

//routers
const registerRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const registerDoctorRouter = require("./routers/routes/dashboard");

const app = express();

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(registerRouter);
app.use(loginRouter);
app.use(registerDoctorRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
