const express = require('express');
const { AddProduct, GetProductByName, GetAllProducts } = require('../controller/productContrller');
const upload = require('../middleware/multer');

const adminRouter = express.Router();

adminRouter.post("/addProduct", upload.single('image'), AddProduct)

adminRouter.get('/getProductByName', GetProductByName)

adminRouter.get("/product", GetAllProducts)

module.exports = adminRouter;