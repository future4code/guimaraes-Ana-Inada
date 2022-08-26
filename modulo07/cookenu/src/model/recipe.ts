export type recipe = {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  author_id: string;
};

export interface recipeInput {
  title: string;
  description: string;
  deadline: Date;
  author_id: string;
}
