const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("express");
const cookieParser = require("cookie-parser");

const logger = require("./src/helpers/logger");

const app = express();
app.use(helmet());

// cors
app.use(cors());

// Init Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// registering routes
app.use("/api/v1", require("./src/routes/api/v1"));
app.use(express.static("public"));

// serve up production assets
// app.use(express.static("client/build"));
// // let the react app to handle any unknown routes
// // serve up the index.html if express does'nt recognize the route
// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`Server started on port ${PORT}`));

module.exports = app;
