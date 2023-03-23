export interface ICard {
  id: number;
  name: string;
  genre: string;
  year: number;
  description: string;
  image: string;
}

export interface IUser {
  name: string | undefined;
  surname: string | undefined;
  birthday: string | undefined;
  country: string | undefined;
  languages: (string | undefined)[];
  gender: string | null;
  file: Blob | undefined;
}
