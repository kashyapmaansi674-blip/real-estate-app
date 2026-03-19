CREATE TABLE properties (
  id          INT PRIMARY KEY AUTO_INCREMENT,
  title       VARCHAR(255) NOT NULL,
  price       DECIMAL(12,2) NOT NULL,
  location    VARCHAR(255) NOT NULL,
  type        VARCHAR(50) NOT NULL,
  description TEXT,
  image_url   VARCHAR(500),
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE amenities (
  id   INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE property_amenities (
  property_id INT,
  amenity_id  INT,
  PRIMARY KEY (property_id, amenity_id)
);

CREATE TABLE inquiries (
  id          INT PRIMARY KEY AUTO_INCREMENT,
  property_id INT,
  name        VARCHAR(150) NOT NULL,
  email       VARCHAR(200) NOT NULL,
  phone       VARCHAR(20),
  message     TEXT,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
