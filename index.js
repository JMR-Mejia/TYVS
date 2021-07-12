const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const debug = require("debug")("app:server");

const config = require("./config");
const graphql = require("./routes/graphQL");
const statsApiRest = require("./routes/stats.apirest");

const app = express();

//Middlewares
app.use(cors());
app.use(
  helmet({
    /**
     * Default helmet policy + own customizations - graphiql support
     * https://helmetjs.github.io/
     */
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [
          "'self'",
          /** @by-us - adds graphiql support over helmet's default CSP */
          "'unsafe-inline'",
        ],
        baseUri: ["'self'"],
        blockAllMixedContent: [],
        fontSrc: ["'self'", "https:", "data:"],
        frameAncestors: ["'self'"],
        imgSrc: ["'self'", "data:"],
        objectSrc: ["'none'"],
        scriptSrc: [
          "'self'",
          /** @by-us - adds graphiql support over helmet's default CSP */
          "'unsafe-inline'",
          /** @by-us - adds graphiql support over helmet's default CSP */
          "'unsafe-eval'",
        ],
        upgradeInsecureRequests: [],
      },
    },
  })
);
app.use(express.json());

//routes
graphql(app);
app.use("/api", statsApiRest);

app.listen(config.port, () => {
  debug(`Listening http://localhost:${config.port}`);
});
