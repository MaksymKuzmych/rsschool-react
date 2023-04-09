export interface ICard {
  id: string;
  created_at: string;
  description: string;
  alt_description: string;
  blur_hash: string;
  likes: number;
  urls: { full: string; small: string };
  user: { username: string; location: string };
}

export interface IUser {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  languages: (string | null)[];
  gender: string | null;
  avatar: FileList | undefined;
  agreement: boolean;
}

export interface ICardsJson {
  results: ICard[];
  total: number;
  total_pages: number;
}
