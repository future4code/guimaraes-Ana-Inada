## 1.

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
SHOW databases;
SHOW TABLES;

#

### 1.a

VACHAR é do tipo string, DATE é do tipo data

#

### 1.B

o Comando show mostra os dados em forma de tabela

## DESCRIBE Actor;

mostra a estrutura de uma tabela o type e a key que são importantes para a modelagem alter do banco de dados

#

## 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

### 2.a

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"fem"
);

#

### 2.b

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"fem"
);

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

a chave primária está duplicada, não pode ter duas chaves primárias iguais

pois a primary key define uma linha da tabela, atributo.

#

### 2.c

INSERT INTO Actor (id, name, salary)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);
##Error Code: 1364. Field 'name' doesn't have a default value

#### o insert está faltando colunas

#

### 2.d

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
"004",
400000,
"1949-04-18",
"male"
);
##Error Code: 1364. Field 'name' doesn't have a default value

#### faltou a coluna name

#

### 2.e

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
1979-03-26,
"female"
);

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

altou aspas da data

#

### 2.e

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Juliana Silveira",
23000.52,
"1980-03-12",
"female"
);

#

## 3.a

SELECT \* from Actor WHERE gender = "female";

#

## 3.b

SELECT salary from Actor WHERE name = "Tony Ramos";

#

## 3.c

SELECT \* FROM Actor WHERE gender= "invalid";

## gerou uma tabela com informações null pq todos os atores tem gender como atributo

#

## 3.d

SELECT \* FROM Actor WHERE (salary) < 500000;

#

## 3.e

SELECT id, nome from Actor WHERE id = "002"

faltou o ponto e vírgula final

Error Code: 1054. Unknown column 'nome' in 'field list'
