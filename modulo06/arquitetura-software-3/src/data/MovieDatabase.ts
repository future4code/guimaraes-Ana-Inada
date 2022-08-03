import { Movies } from "../types/Movies";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_MOVIES = "LABEFLIX_MOVIE";

  async create({
    id,
    title,
    description,
    duration_in_minutes,
    year_of_release,
  }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release,
      })
      .into(MovieDatabase.TABLE_MOVIES);
  }

  async findAll(): Promise<Movies[]> {
    const movies = await MovieDatabase.connection(MovieDatabase.TABLE_MOVIES);
    const result = movies.map(
      (movie) =>
        new Movies(
          movie.id,
          movie.title,
          movie.description,
          movie.duration_in_minutes,
          movie.year_of_release
        )
    );
    return result;
  }
}
