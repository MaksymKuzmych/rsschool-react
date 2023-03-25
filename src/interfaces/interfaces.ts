export interface ICard {
  id: number;
  name: string;
  genre: string;
  year: number;
  description: string;
  image: string;
}

export interface IUser {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  languages: (string | null)[];
  gender: string | null;
  file: Blob | undefined;
}
