 DROP DATABASE MERAKI_Academy_Project_5;
CREATE DATABASE MERAKI_Academy_Project_5;

USE MERAKI_Academy_Project_5;

   
Create table roles (
 role_id INT AUTO_INCREMENT NOT NULL,
 role VARCHAR(255) NOT NULL,
 primary key (role_id)
);


CREATE TABLE users(
 id INT AUTO_INCREMENT NOT NULL,
 firstName VARCHAR(255),
 lastName VARCHAR(255),
 age INT(3),
 email  VARCHAR(255),
 password VARCHAR(255),
 role_id INT,
 FOREIGN KEY (role_id) REFERENCES roles (role_id),
 is_deleted TINYINT DEFAULT 0,
 img TEXT,
 PRIMARY KEY (id)
);


CREATE TABLE doctors (
 doctor_id INT AUTO_INCREMENT NOT NULL,
 FirstName VARCHAR(255) ,
 lastName Varchar(255),
 description TEXT,
 email VARCHAR(255) NOT NULL,
 Qualifications VARCHAR (255) ,
 practicalExperiences VARCHAR(255) , 
 qualificationsFile VARCHAR(255),
 primary key(doctor_id)
);


CREATE TABLE doctorsDetails (
 id INT AUTO_INCREMENT NOT NULL,
 description VARCHAR(255),
 price INT,
Qualifications VARCHAR (255) ,
 practicalExperiences VARCHAR(255) , 
 qualificationsFile VARCHAR(255),
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (id)
);

CREATE TABLE foodTraker (
 id INT AUTO_INCREMENT NOT NULL,
 breakfast VARCHAR(255),
 snack VARCHAR(255),
 lunch VARCHAR(255),
 dinner VARCHAR(255),
 glassesOfWater INT ,
 activeTime VARCHAR(255),
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (id)
);

CREATE TABLE Success (
 Success_id INT AUTO_INCREMENT NOT NULL,
 description VARCHAR(255),
 user_id INT,
is_deleted TINYINT DEFAULT 0,
 FOREIGN KEY (user_id) REFERENCES users(id),
 primary key (Success_id )
);

CREATE TABLE reviews(
 id INT AUTO_INCREMENT NOT NULL,
 comment VARCHAR(255),
 doctor_id INT,
 FOREIGN KEY ( doctor_id ) REFERENCES doctorsDetails(id),
 commenter_id INT,
 rating INT ,
 FOREIGN KEY (commenter_id) REFERENCES users(id),
 is_deleted TINYINT DEFAULT 0,
 PRIMARY KEY (id)
);

CREATE TABLE purchased(
 id INT AUTO_INCREMENT NOT NULL,
 doctorsService_id INT,
 user_id INT,
 FOREIGN KEY ( doctorsService_id ) REFERENCES doctorsDetails(id),
 FOREIGN KEY ( user_id  ) REFERENCES users(id),
 is_deleted TINYINT DEFAULT 0,
 PRIMARY KEY (id)
);

INSERT INTO roles (role) VALUES ("user");
INSERT INTO roles (role) VALUES ("doctor");
INSERT INTO roles (role) VALUES ("admin");


INSERT INTO users (firstName,lastName,age,email,password,role_id,img) VALUES ("customer","last",23,"cutomer.com","123456",1,"https://www.pngkey.com/png/full/804-8049827_input-black-male-avatar.png");
INSERT INTO users (firstName,lastName,age,email,password,role_id,img) VALUES ("doctor","last",23,"doctor.com","123456",2,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZk6bwrMvpCsKucQ5NrRLTxa0T0B0Nlrn9CA&usqp=CAU");
INSERT INTO users (firstName,lastName,age,email,password,role_id,img) VALUES ("admin","last",23,"admin.com","123456",3,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZob-roOCV5Q54sF9k0oRrvRZ846yMMAtJg&usqp=CAU");

