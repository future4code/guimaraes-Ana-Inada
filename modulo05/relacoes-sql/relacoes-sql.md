- Exercício 1

  No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações.

  As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela

  ```sql
  CREATE TABLE Rating (
  		id VARCHAR(255) PRIMARY KEY,
      comment TEXT NOT NULL,
  		rate FLOAT NOT NULL,
      movie_id VARCHAR(255),
      FOREIGN KEY (movie_id) REFERENCES Movie(id)
  )
  ```

  _a) Explique o que é uma chave estrangeira_

  A chave estrangeira é a chave primitiva de outra tabela, ela serve para relacionar tabelas que tem os mesmos atributos.

  _b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes_

```sql
 INSERT INTO Rating (`id`, `comment`, `rate`, `movie_id`)
 VALUES ('001', 'Engraçado', '7', '001');

 INSERT INTO Rating (`id`, `comment`, `rate`, `movie_id`)
 VALUES ('002', 'engraçado', '7', '002');

 INSERT INTO Rating (`id`, `comment`, `rate`, `movie_id`)
 VALUES ('003', 'filme delicado e forte', '10', '003');
```

_c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query._

    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.

A chave estrangeira não pertence à nenhum filme.

d) _Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating._

```sql
  ALTER TABLE Movie DROP COLUMN rating;
```

_e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query._

Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id' To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

Não entendi, acho que tenho que desabilitar o modo segurança.

- Exercício 2

  Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**

  Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

  ```sql
  CREATE TABLE MovieCast (
  		movie_id VARCHAR(255),
  		actor_id VARCHAR(255),
      FOREIGN KEY (movie_id) REFERENCES Movie(id),
      FOREIGN KEY (actor_id) REFERENCES Actor(id)
  );
  ```

  _a) Explique, com as suas palavras, essa tabela_

  Essa tabela pega dois atributos de duas outras tabelas, o id do filme e o id do ator para relacionar o ator que participar do filme, dessa forma um ator por participar de mais de um filme, assim como um filme pode ter mais de um ator.

  _b) Crie, ao menos, 6 relações nessa tabela_

  ```sql
  INSERT INTO MovieCast (movie_id, actor_id)
  VALUES ("002","011");

  INSERT INTO MovieCast (movie_id, actor_id)
  VALUES ("002","008");

  INSERT INTO MovieCast (movie_id, actor_id)
  VALUES ("001","009");

  INSERT INTO MovieCast (movie_id, actor_id)
  VALUES ("001","012");

  INSERT INTO MovieCast (movie_id, actor_id)
  VALUES ("003","007");

  INSERT INTO MovieCast (movie_id, actor_id)
  VALUES ("003","010");
  ```

  _c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query_

        Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails

  as chaves estrangeiras não existem

  _d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query_

  Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails

        (`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

  Não pode excluir uma linha pai, que fornece id para uma outra tabela como chave estrangeira.

- Exercício 3

  Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`.

  Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim:

  ```sql
  SELECT * FROM Movie
  INNER JOIN Rating ON Movie.id = Rating.movie_id;
  ```

  _a) Explique, com suas palavras, a query acima. O que é o operador `ON`?_

  O ON junta as duas tabelas de forma geral, diferente do USING que pode unir uma coluna se tiver o mesmo id, no caso o ON ele junta duas tabelas para uma maior e se tiver uma coluna repetida ele irá mostrar repetido.

  _b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados._

        SELECT Movies.movie, Rating.id, Rating.rate  FROM Movies
        INNER JOIN Rating ON Movies.id = Rating.movie_id;
