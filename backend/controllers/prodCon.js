const prodModel = require('../model/prodModel')
const fsPromises = require('fs').promises
const path = require('path')

const addprod = async (req, res) => {
    let image_filename = `${req.file.filename}`

    try {
        const prod = await prodModel.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename//
        })
        res.json({success:true, message: "prod added successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error adding prod"})
    }
}


const listprod = async (req, res) => {
    try {
        const prods = await prodModel.find()
        res.status(200).json({success:true, data: prods})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message: "Error fetching prods"})
    }
}

const removeprod = async (req,res)=>{
    try {
        const {id} = req.query
        console.log(id)
        const prod = await prodModel.findById(id)
        if(!prod)
            return res.status(404).json({success:false, message: "prod not found"})
        await fsPromises.unlink(path.join(__dirname,'..','uploads',`${prod.image}`))
        await prodModel.deleteOne({_id:id})
        res.status(200).json({success:true, message: "prod deleted successfully"})
    } catch (error) {
        console.log(error);//
        res.status(500).json({success:false, message: "Error deleting prod"})
    }
}

const addReview = async (req, res) => {
  const { productId, rating, comment } = req.body;
  try {
    const product = await prodModel.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    const alreadyReviewed = product.reviews.find(r => r.userId === req.userId);
    if (alreadyReviewed) return res.status(400).json({ success: false, message: "You already reviewed this product" });

    const review = {
      userId: req.userId,
      name: req.userName,
      rating: Number(rating),
      comment
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.averageRating = product.reviews.reduce((acc, item) => acc + item.rating, 0) / product.numReviews;

    await product.save();
    res.json({ success: true, message: "Review added" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { addprod,listprod,removeprod,addReview  }