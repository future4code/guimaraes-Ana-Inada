export class post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private type: POST_TYPES,
    private createdAt: Date,
    private authorId: string
  ) {}
}
