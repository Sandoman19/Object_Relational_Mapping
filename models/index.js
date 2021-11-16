// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
// Define a Category as having many Products, thus creating a foreign key in the `Product` table
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Products belongsTo Category
// The association can also be created from the Product side
Product.belongsTo(Category, {
  foreignKey: 'Category_id',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_tag' 
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tagged_products' 
});

module.exports = { Product, Category, Tag, ProductTag };
