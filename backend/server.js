const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
var cors = require("cors");
const errorHandler = require("./middleware/error.js");
const path = require("path");

// env vars
dotenv.config({ path: "./backend/config/config.env" });

// Connect to DB
connectDB();

// Route files
const tournaments = require("./routes/tournaments");
const auth = require("./routes/auth");

const app = express();
// Cors
app.use(cors());

//Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

//File upload
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Mount routers
app.use("/api/v1/tournaments", tournaments);
app.use("/api/v1/auth", auth);

app.use(errorHandler);

//Handle production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public"));

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.bold
      .yellow
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  // Close server and exit process
  server.close(() => process.exit(1));
});
