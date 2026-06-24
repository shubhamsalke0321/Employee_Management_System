require("dotenv").config({ path: ".env" });

const app = require("./src/app");
const ConnectDB = require("./src/config/db.config");

const PORT = process.env.PORT || 1234;

ConnectDB();

app.listen(PORT, () => {
  console.log(`This Server Running On Port ${PORT}`);
});