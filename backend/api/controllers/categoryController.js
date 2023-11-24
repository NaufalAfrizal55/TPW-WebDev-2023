const Category = require('../models/categoryModel')

exporta.createCategory = async(req, res) => {
    try {
      const { name } = req.body;
  
      if (!name) {
        return res.json({ error: "Name is required" });
      }
  
      const existingCategory = await Category.findOne({ name });
  
      if (existingCategory) {
        return res.json({ error: "Already exists" });
      }
  
      const category = await new Category({ name }).save();
      res.json(category);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
}
  
exports.updateCategory = async (req, res) => {
    try {
      const { name } = req.body;
      const { categoryId } = req.params;
  
      const category = await Category.findOne({ _id: categoryId });
  
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
  
      category.name = name;
  
      const updatedCategory = await category.save();
      res.json(updatedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
}
  
exports.removeCategory = async (req, res) => {
    try {
      const removed = await Category.findByIdAndRemove(req.params.categoryId);
      res.json(removed);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
}
  
exports.listCategory = async (req, res) => {
    try {
      const all = await Category.find({});
      res.json(all);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
}
  
exports.readCategory = async (req, res) => {
    try {
      const category = await Category.findOne({ _id: req.params.id });
      res.json(category);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.message);
    }
}