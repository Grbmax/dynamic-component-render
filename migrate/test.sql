CREATE DATABASE dynamic_test;
USE dynamic_test;

CREATE TABLE student (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    age VARCHAR(30),
    s_grade VARCHAR(45)
);

CREATE TABLE grade (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    s_grade VARCHAR(45),
    sub_name VARCHAR(45)
);

INSERT INTO student(age, s_grade) VALUES ('Arjun','First');
INSERT INTO student(age, s_grade) VALUES ('Bheem','First');
INSERT INTO student(age, s_grade) VALUES ('Rohit','Second');
INSERT INTO student(age, s_grade) VALUES ('Shyam','Third');
INSERT INTO student(age, s_grade) VALUES ('Ram','Third');

INSERT INTO grade(s_grade, sub_name) VALUES ('First','Maths');
INSERT INTO grade(s_grade, sub_name) VALUES ('First','English');
INSERT INTO grade(s_grade, sub_name) VALUES ('Second','German');
INSERT INTO grade(s_grade, sub_name) VALUES ('Second','Science');
INSERT INTO grade(s_grade, sub_name) VALUES ('Third','History');
INSERT INTO grade(s_grade, sub_name) VALUES ('Third','Geography');
