
CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_recipe (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Cookenu_users(id)
);

CREATE TABLE IF NOT EXISTS Cookenu_friendship (
    id VARCHAR(64),
    id_user_follows VARCHAR(64),
    id_followed_user  VARCHAR(64),
    PRIMARY KEY (id),
    FOREIGN KEY (id_user_follows) REFERENCES Cookenu_users(id),
    FOREIGN KEY (id_followed_user) REFERENCES Cookenu_users(id)
);


ALTER TABLE Cookenu_friendship DROP COLUMN id_user_follows;

DROP TABLE Cookenu_friendship;