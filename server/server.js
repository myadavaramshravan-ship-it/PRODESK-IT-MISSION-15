require("dotenv").config();


const express=require("express");
const cors=require("cors");


const connectDB=require("./config/db");


const authRoutes=require("./routes/authRoutes");
const taskRoutes=require("./routes/taskRoutes");
const paymentRoutes=require("./routes/paymentRoutes");



const app=express();



connectDB();
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "https://prodesk-it-mission-15.vercel.app/",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.use(cors());


app.use(express.json());



app.use(
"/api/auth",
authRoutes
);


app.use(
"/api/tasks",
taskRoutes
);


app.use(
"/api/payment",
paymentRoutes
);



app.get("/",(req,res)=>{

res.send("API Running");

});



const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>{

console.log(
`Server running on port ${PORT}`
);

});