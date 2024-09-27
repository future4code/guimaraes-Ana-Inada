export class Movies {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private duration_in_minutes: number,
    private year_of_release: number
  ) {}

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getYear_of_release() {
    return this.year_of_release;
  }

  getDescription() {
    return this.description;
  }
  getDuration_in_minutes() {
    return this.duration_in_minutes;
  }
  setId(newId: string) {
    this.id = newId;
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  setDescription(newDescription: string) {
    this.description = newDescription;
  }

  setYear_of_release(newYear_of_release: number) {
    this.year_of_release = newYear_of_release;
  }

  setDuration_in_minutes(newDuration_in_minutes: number) {
    this.duration_in_minutes = newDuration_in_minutes;
  }
}
