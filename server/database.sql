CREATE DATABASE gpuhaven;


CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255),
    price NUMERIC(1000,2),
    brand_name VARCHAR(100)
);