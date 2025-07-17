CREATE TABLE skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  rating TINYINT CHECK (rating BETWEEN 1 AND 5),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


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
