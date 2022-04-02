const db = require('../db');

 const getAllProducts = async (req, res) => {
    try {
        const products = await db.query("SELECT * FROM products")
        res.json(products.rows);
    } catch (err) {
        console.error(err.message);
    }
}

 const addProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { product_name, price, brand_name } = req.body;
        const new_product = await db.query(
            "INSERT INTO products (product_name, price, brand_name) VALUES ($1, $2, $3) RETURNING *",
            [product_name, price, brand_name]
        )

        res.json(new_product.rows);
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = {
    getAllProducts,
    addProduct
}