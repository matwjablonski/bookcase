import { SocialMedia } from "../shared/models/socialMedia.model";

enum Sex {
  MALE,
  FEMALE,
  OTHER
}

export interface Author {
  id: string;
  name: string;
  fullName: string;
  alias: string;
  dateOfBirth: Date;
  dateOfDeath: Date;
  placeOfBirth: string;
  description: string;
  sex: Sex;
  style: string[];
  social: SocialMedia;
}
