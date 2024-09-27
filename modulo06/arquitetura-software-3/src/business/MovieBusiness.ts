import { v4 as generateId } from "uuid";
import { MovieDatabase } from "../data/MovieDatabase";
import { Movies } from "../types/Movies";

const movieDatabase = new MovieDatabase();
export class MovieBusiness {
  async create({
    title,
    description,
    duration_in_minutes,
    year_of_release,
  }: any): Promise<void> {
    if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error("Dados inválidos");
    }

    const id = generateId();
    await movieDatabase.create({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release,
    });
  }
  async findAll(): Promise<Movies[]> {
    const result = await movieDatabase.findAll();
    return result;
  }
}
