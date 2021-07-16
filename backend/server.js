const express = require("express");
require("dotenv").config();
require("./db/db");
const cors = require("cors");
const socket = require("socket.io");

//routers
const registerRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const registerDoctorRouter = require("./routers/routes/dashboard");

const acceptDoctorRouter = require("./routers/routes/acceptDoctor");
const doctorDetailsRouter = require("./routers/routes/doctorProfile");
const myPatient = require("./routers/routes/mypatient");

const storyRouter = require("./routers/routes/story");

const sendEmailRouter = require("./routers/routes/email");

const scheduleRoute = require("./routers/routes/schedule");
const foodTrackerRouter = require("./routers/routes/foodTracker");
const reviewRouter = require("./routers/routes/review");
// const storyRouter = require("./routers/routes/story")

const doctorRouter = require("./routers/routes/doctor");
const userRouter = require("./routers/routes/user");
const Conversation = require("./routers/routes/conversation");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")


const app = express();

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(registerRouter);
app.use(loginRouter);
app.use(registerDoctorRouter);
app.use(acceptDoctorRouter);

app.use(reviewRouter);
app.use(storyRouter);
app.use(doctorDetailsRouter);
app.use(foodTrackerRouter);

app.use(doctorRouter);
app.use(userRouter);
app.use(myPatient);
app.use(scheduleRoute);

app.use(sendEmailRouter);
app.use(Conversation);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body
  try {
      const payment = await stripe.paymentIntents.create({
          amount,
          currency: "USD",
          description: "A_TEAM company",
          payment_method: id,
          confirm: true
      })
      console.log("Payment", payment)
      res.json({
          message: "Payment successful",
          success: true
      })
  } catch (error) {
      console.log("Error", error)
      res.json({
          message: "Payment failed",
          success: false
      })
  }
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST", "DELETE", "PUT"],
  },
});
io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data);
    // console.log("user joined room:", data);
  });

  socket.on("send_message", (data) => {
    console.log("data", data);
    socket.to(data.room).emit("receive_message", data.message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
