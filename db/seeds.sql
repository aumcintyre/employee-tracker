-- Active: 1664493076393@@127.0.0.1@3306@employee_db

INSERT INTO department (name)
VALUES 
('Marketing'),
('Information Technology'),
('Finance'),
('Accounting'),
('R & D');

INSERT INTO role (title, salary, department_id)
VALUES
('Software Engineer', 120000, 1),
('Full Stack Developer', 95000, 1),
('Accountant', 120000, 2), 
('Financial Analyst', 150000, 2),
('Brand Ambassador', 35000, 3), 
('Project Manager', 100000, 4);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Austin', 'McIntyre', 2, null),
('Brian', 'Mills', 1, 1),
('Petunia', 'Gray', 4, null),
('Ashley', 'Flowers', 3, 3),
('James', 'Mack', 6, null),
('Sara', 'Cardon', 5, 5),
('Luis', 'Lopez', 5, null),
('Graciela', 'Chavez', 4, null);
