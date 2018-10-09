
DROP TABLE IF EXISTS Comment;

CREATE TABLE Comment (
  comment_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment_name VARCHAR(200) NOT NULL
);

INSERT INTO Comment (comment_id, comment_name)
VALUES (1, 'Porcupine Pineapple');
INSERT INTO Comment (comment_id, comment_name)
VALUES (2, 'Applebee Beehive');
