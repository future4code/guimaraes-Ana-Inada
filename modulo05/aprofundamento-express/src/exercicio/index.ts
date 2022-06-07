import { Request, Response } from 'express';
import { app } from '../index';
import { users } from './data';
import { v4 as generateId } from 'uuid';

// INICIO DAS ROTAS FEITAS NA AULA ANTERIOR
app.get('/playlists', (request: Request, response: Response) => {
   try {
      // recebendo o usuario que ta pedindo
      const userName = request.headers.authorization;
      // verifico se esse usuario tem playlist
      const user = users.find((user) => user.id === userName);
      // se nao tiver usuario, erro
      if (!user) throw new Error('Usuário não encontrado');
      // se chegou aqui, é pq tem um usuario, ai pega as playlists
      const playlists = user.playlists;
      // se nao tiver nenhuma playlist, erro (REDUNDANTE)
      if (!playlists) throw new Error('Nenhuma playlist cadastrada');
      //respondo com a playlist
      response.send(playlists);
   } catch (error: any) {
      response.end(error.message);
   }
});

app.get('/tracks/:idPlaylist', (request: Request, response: Response) => {
   try {
      const userName = request.headers.authorization;
      const user = users.find((user) => user.id === userName);

      if (!user) throw new Error('Usuário não encontrado');

      const IDPlaylist = request.params.idPlaylist;

      if (!IDPlaylist) throw new Error('O id da playlist é obrigatorio');

      let tracks;
      user.playlists.forEach((playlist) => {
         if (playlist.id === IDPlaylist) {
            tracks = playlist.tracks;
         }
      });

      response.send(tracks);
   } catch (error: any) {
      response.end(error.message);
   }
});

app.delete('/playlist/:id', (request: Request, response: Response) => {
   try {
      const IDPlaylist = request.params.id;

      users.forEach((user) => {
         user.playlists = user.playlists.map((playlist: any) => {
            if (playlist.id === IDPlaylist) {
               return {};
            }
            return playlist;
         });
      });
      response.send('Playlist deletada com sucesso!');
   } catch (error: any) {
      response.end(error.message);
   }
});

app.delete(
   '/track/:idPlaylist/:idTrack',
   (request: Request, response: Response) => {
      try {
         const IDPlaylist = request.params.idPlaylist;
         const IDTrack = request.params.idTrack;

         if (!IDPlaylist || !IDTrack)
            throw new Error('Id da Playlist e da Track sao obrigatórios!');

         const allPlaylists = users
            .map((user: any) => {
               return user.playlists;
            })
            .flat(1);

         allPlaylists.forEach((playlist: any) => {
            if (playlist.id === IDPlaylist) {
               playlist.tracks = playlist.tracks.map((track: any) => {
                  if (track.id === IDTrack) {
                     return {};
                  }

                  return track;
               });
            }
         });

         response.send('Track deletada com sucesso!');
      } catch (error: any) {
         response.end(error.message);
      }
   }
);
// FIM DAS ROTAS FEITAS NA AULA ANTERIOR

//-----------------------------------------------------------------

// INICIO DAS ROTAS DA AULA DE HOJE

app.get('/playlists/search', (request: Request, response: Response) => {
   try {
      const userName = request.headers.authorization;
      const user = users.find((user) => user.id === userName);

      if (!user) throw new Error('Usuário não encontrado');

      const playlistName = request.query.name;
      if (!playlistName)
         throw new Error('É necessário informar o nome da playlist');

      const playlist = user.playlists.find(
         (playlist) =>
            playlist.name === (playlistName as string).toLocaleLowerCase()
      );

      if (!playlist) throw new Error('Playlist não encontrada');

      response.send(playlist);
   } catch (error: any) {
      response.end(error.message);
   }
});

app.post('/playlist/create', (request: Request, response: Response) => {
   try {
      // pega o nome do usuario e busca ele nos usuarios
      const userName = request.headers.authorization;
      const user = users.find((user) => user.id === userName);

      if (!user) throw new Error('Usuario nao existe com esse ID');
      // passou  daqui, é pq o usuario existe

      const playlistName = request.body.name;
      if (!playlistName)
         throw new Error('É necessario informar um nome para a nova playlist');
      //passou daqui, é pq veio o nome da playlist

      const newPlaylist = {
         id: generateId(), // poderia ser Math.random()
         name: playlistName,
         // QUANDO O NOME DA PROPRIEDADE É IGUAL O DO VALOR, PODEMOS OMITIR UM
         // name
         tracks: [],
      };

      user.playlists.push(newPlaylist);
      response
         .status(201)
         .send(`A Playlist ${playlistName} foi criada com sucesso!`);
   } catch (error: any) {
      response.end(error.message);
   }
});

app.post(
   '/playlists/:idPlaylist/tracks',
   (request: Request, response: Response) => {
      try {
         // pega o nome do usuario e busca ele nos usuarios
         const userName = request.headers.authorization;
         const user = users.find((user) => user.id === userName);

         if (!user) throw new Error('Usuario nao existe com esse ID');
         // passou  daqui, é pq o usuario existe

         const idPlaylist = request.params.idPlaylist;
         if (!idPlaylist)
            throw new Error(
               'É necessario informar um nome para a nova playlist'
            );
         //passou daqui, é pq veio o nome da playlist

         // busca a playlist na lista de playlists do usuario
         const playlist = user.playlists.find(
            (playlist) => playlist.id === idPlaylist
         );
         console.log(playlist);
         if (!playlist)
            throw new Error('Playlist nao encontada ou nao existe!');
         //passou daqui, é pq existe a playlist

         // DESTRUTURAÇAO
         const { name, artist, url } = request.body;

         const newTrack = {
            id: generateId(),
            name, // QUANDO NO NOME DA PROPRIEDADE É IGUAL O DO VALOR, PODE-SE OMITIR UM
            artist,
            url,
         };

         playlist.tracks.push(newTrack);

         response.status(201).send('Track foi criada!');
      } catch (error: any) {
         response.end(error.message);
      }
   }
);
