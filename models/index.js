// import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
// Define a Category as having many Products, thus creating a foreign key in the `Product` table
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongsTo Category
// The association can also be created from the Product side
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = { Product, Category, Tag, ProductTag };
