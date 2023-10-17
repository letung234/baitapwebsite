const homeRouters = require("./home.route");
const productRouters = require("./product.route");
const searchRouters = require("./search.route");
const cartRouters = require("./cart.route");
const checkoutRouters = require("./checkout.route");
const categoryMiddleware = require("../../middlewares/client/category.middleware");
const cartMiddleware = require("../../middlewares/client/cart.middleware");


module.exports = (app) => {
  app.use(categoryMiddleware.category)
  app.use(cartMiddleware.cartId);
  app.use("/", homeRouters);
  app.use("/products",productRouters);
  app.use("/search", searchRouters);
  app.use("/cart", cartRouters);
  app.use("/checkout", checkoutRouters);
};
