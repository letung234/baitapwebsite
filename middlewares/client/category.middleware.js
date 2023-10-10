const ProductCategory = require("../../models/product-category.model");
const createTreeHelper = require("../../helpers/createTree");

module.exports.category = async (req, res, next) => {
   let find = {
      deleted: false,
    };
  const records = await ProductCategory.find(find);
  const newRecords = createTreeHelper.tree(records);

  res.locals.records = newRecords;
  next();
};
