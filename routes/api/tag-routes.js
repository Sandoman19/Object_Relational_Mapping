const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // TODO: be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll( {
      include: [
        { model: Product, through: ProductTag, as: 'tagged_products' }
      ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // TODO: be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product, through: ProductTag, as: 'tagged_products' }
      ],
    });  
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }  
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      // Fields updated and the data attached to the request body.
      tag_name: req.body.tag_name,
    },
    {
      // Gets the tag based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedTag) => {
    // Sends the updated Tag as a json response
    res.json(updatedTag);
  })
  .catch((err) => res.json(err));  
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    // Gets the tag based on the id given in the request parameters
    where: {
      id: req.params.id,
    },
  })
  .then((deletedTag) => {
    // Sends the updated Tag as a json response
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
