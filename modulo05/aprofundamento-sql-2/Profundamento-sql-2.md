## Exercício 1

### a. ALTER TABLE Actor DROP COLUMN salary;

esse comando apaga a coluna de salário da tabela

#

### b. ALTER TABLE Actor MODIFY gender VARCHAR(6);

altera a coluna gender para que aceite estring de até 6 caracteres

#

### c. Agora, altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

ALTER TABLE Actor MODIFY gender VARCHAR(100);

#

## Exercício 2

### a. screva uma query que atualize o nome e a data de nascimento do ator com o id 003

UPDATE Actor
SET birth_date = "1951-11-11"
WHERE id = "003";

#

### b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

#

### c. Escreva uma query que atualize todas as informações do ator com o id 005

UPDATE Actor
SET name = "Marília Pera", salary = "777000.00", birth_date= "1953-10-10",
gender = "female"
WHERE id = "005";

#

### d. _Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado._

0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0

Não apontou erro e nem gerou uma linha nova, ou seja, não teve mudança

## Exercício 3

### a. Escreva uma query que apague a atriz com o nome Fernanda Montenegro

DELETE FROM Actor WHERE name = "Fernanda Montenegro"

#

### b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

DELETE FROM Actor WHERE gender = "male" AND salary > "1000000";

#

## Exercício 4

### a) _Escreva uma query que pegue o maior salário de todos os atores e atrizes_

SELECT MAX(salary) FROM Actor WHERE;

#

### b) _Escreva uma query que pegue o menor salário das atrizes_

SELECT MAX(salary) FROM Actor WHERE gender ="female";

#

### c) _Escreva uma query que pegue a quantidade de atrizes_

SELECT COUNT(\*) FROM Actor WHERE gender ="female";

#

### d) _Escreva uma query que pegue a soma de todos os salários_

SELECT SUM(salary) FROM Actor

#

## Exerccício 5
