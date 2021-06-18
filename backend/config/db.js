const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.connectDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(
    `MongoDB connected: ${conn.connection.host}:${conn.connection.port}`.cyan
      .bold
  );
};

module.exports = connectDB;
