// Kết nối Express
const express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var flash = require("express-flash");
var cookieParser = require("cookie-parser");
var session = require("express-session");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(methodOverride("_method"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Flash
app.use(cookieParser("HJSHDJSJJASHDJ"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// End Flash
// Gọi routes
const routeAdmin = require("./routes/admin/index.route");
const route = require("./routes/client/index.route");

const systemConfig = require("./config/system");
// App local variables
// Tạo ra biến toàn cục (file pub nào cũng dùng được)
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// Kêt nối database
const database = require("./config/database");
database.connect();
// Kết nối trang PUG
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");
app.use(express.static(`${__dirname}/public`));

route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`App listening opn the port : ${port}`);
});
