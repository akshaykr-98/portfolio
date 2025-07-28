CREATE TABLE skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  rating TINYINT CHECK (rating BETWEEN 1 AND 5),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

---------------------------------------
DELIMITER $$

CREATE PROCEDURE insert_skill (
  IN p_name VARCHAR(100),
  IN p_description TEXT,
  IN p_start_date DATE,
  IN p_rating TINYINT
)
BEGIN
  INSERT INTO skills (name, description, start_date, rating)
  VALUES (p_name, p_description, p_start_date, p_rating);
END$$

DELIMITER ;

------------------------------------------

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- store hashed password (bcrypt)
    role VARCHAR(50) DEFAULT 'user', -- optional: admin/user/etc.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
----------------------------------------
DELIMITER $$

CREATE PROCEDURE insert_user (
  IN p_name VARCHAR(100),
  IN p_email VARCHAR(100),
  IN p_password VARCHAR(255),
  IN p_role VARCHAR(50)
)
BEGIN
  INSERT INTO users (name, email, password, role )
  VALUES(p_name, p_email,p_password, p_role);
  END$$

DELIMITER ;

----------------------------------------

CREATE TABLE purposes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-----------------------------------------
CREATE TABLE purpose_fields (
    id INT AUTO_INCREMENT PRIMARY KEY,
    purpose_id INT NOT NULL,
    label VARCHAR(100) NOT NULL,
    field_type VARCHAR(50) NOT NULL,  -- e.g., 'text', 'number', 'date', 'select'
    field_name VARCHAR(100) NOT NULL, -- used as key in frontend
    is_required BOOLEAN DEFAULT FALSE,
    field_order INT DEFAULT 0,
    FOREIGN KEY (purpose_id) REFERENCES purposes(id)
);

----------------------------------------
CREATE TABLE purposeSelected (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    purpose_id INT NOT NULL,
    submission_data JSON,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (purpose_id) REFERENCES purposes(id)
);
