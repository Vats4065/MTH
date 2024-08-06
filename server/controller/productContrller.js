const productModel = require("../model/productModel")

const AddProduct = async (req, res) => {
    const { name, price, description } = req.body;

    const image = req?.file?.path;

    try {
        if (!name || !price || !description || !image) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existPro = await productModel.findOne({ name });
        if (existPro) {
            return res.status(200).json({ error: 'Product already exists' });
        }

        const newProduct = await productModel.create({ name, price, description, image });
        return res.status(200).json({ newProduct });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


const GetProductByName = async (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: 'Product name is required' });
    }

    try {
        const product = await productModel.findOne({ name });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching product' });
    }
};

const GetAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        console.log(products);
        if (!products) {
            return res.status(401).json({ error: 'No products found' });
        }
        else {
            return res.status(200).json(products);
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
}


module.exports = { AddProduct, GetProductByName, GetAllProducts };