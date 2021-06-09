const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// npm
const express = require("express");
const app = express();

// varible
const port = process.env.PORT;
// ---Middleware
app.use(express.json());

// --- Import route

const authRoutes = require("./routes/auth.route");
const weatherRoutes = require("./routes/weather.route");
//  ---My route
app.use("/", authRoutes);
app.use("/weather", weatherRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
