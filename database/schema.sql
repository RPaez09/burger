CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(80) NOT NULL,
    devoured bool DEFAULT false,
    PRIMARY KEY (id)
);

/*If you're getting an error with auth protocol*/
alter user '{username}'@'{host}' identified with mysql_native_password by '{password}'