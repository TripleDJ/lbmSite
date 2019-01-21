const express = require("express");
const app = express();

require("./routes/mainRoutes")(app);

app.listen(5000);
