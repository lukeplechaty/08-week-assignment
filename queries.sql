CREATE TABLE IF NOT EXISTS week08blogs (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    blog TEXT NOT NULL
);

INSERT INTO week08blogs(name,blog) VALUES ('init','this is the start of my bloging');

SELECT id,name FROM week08blogs

CREATE TABLE IF NOT EXISTS week08comments (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    msg TEXT NOT NULL,
    blog_id INT REFERENCES week08blogs(id) NOT NULL
);

INSERT INTO week08comments(name,msg,blog_id) VALUES ('Luke','Nice Start',1);

