CREATE DATABASE gpuhaven;


CREATE TABLE products(
    product_id SERIAL NOT NULL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price NUMERIC(1000,2) NOT NULL,
    brand_name VARCHAR(100) NOT NULL,
    specID INT REFERENCES tech_spec (specID),
    imgUrl TEXT
);

CREATE TABLE tech_spec(
    specID SERIAL NOT NULL  PRIMARY KEY,
    memory VARCHAR(30),
    memory_size INT,
    memory_type VARCHAR(30),
    clock_speed INT,
    chipsetID INT REFERENCES chipset (chipsetID),
    interface_type VARCHAR(255)
);

CREATE TABLE chipset(
    chipsetID SERIAL NOT NULL PRIMARY KEY,
    chipset_name VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    gpu_series VARCHAR(255) NOT NULL
);

--INSERT INTO CHIPSET
INSERT INTO chipset(chipset_name, model, gpu_series) VALUES('AMD', 'AMD Radeon RX 6000 Series', 'RX 6000');


--INSERT INTO SPECS
INSERT INTO tech_spec (memory, memory_size, memory_type, clock_speed,  interface_type) VALUES('14000 MHz', 8, 'GDDR6', 14000, 'PCI Express 4.0');

-- INSERT INTO PRODUCTS
INSERT INTO products (product_name, price, brand_name , imgUrl) VALUES ('GIGABYTE Radeon RX 6600 EAGLE 8G Graphics Card, WINDFORCE 3X Cooling System, 8GB 128-bit GDDR6, GV-R66EAGLE-8GD Video Card', 369, 'GIGABYTE', 'https://c1.neweggimages.com/ProductImageCompressAll300/14-932-481-V01.jpg' );


UPDATE products SET specID = 1 where specID = 1;
UPDATE tech_spec SET chipsetID = 1 where specID = 1;