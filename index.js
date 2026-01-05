const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const rateLimiter = require("./middlewares/rateLimit.middleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(rateLimiter);

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/feedback", require("./routes/feedback.routes"));
app.use("/api/analytics", require("./routes/analytics.routes"));

app.use(morgan(':date[iso] -> :method :url :status :res[content-length] - :response-time ms - :req[x-platform] - :req[x-app-version]', {
  skip: function (req, res) { return req.method === 'OPTIONS' }
}));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

module.exports = app;
