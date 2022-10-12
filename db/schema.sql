-- Active: 1664493076393@@127.0.0.1@3306@employee_db

DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE
    department(
        id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(25) NOT NULL
    );

CREATE TABLE
    role(
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(25) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INTEGER,
        FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE
        SET NULL
    );

CREATE Table
    employee (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(25) NOT NULL,
        last_name VARCHAR(25) NOT NULL,
        role_id INTEGER,
        FOREIGN KEY (role_id) REFERENCES role(id),
        manager_id INTEGER,
        FOREIGN KEY (manager_id) REFERENCES employee(id)
    )