const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB Connected: ${connection.connection.host}`
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;