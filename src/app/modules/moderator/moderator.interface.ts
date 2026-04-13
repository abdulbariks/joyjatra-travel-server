import { Gender } from "../../../generated/prisma/enums";

export interface ICreateModeratorInput {
  password: string;
  name: string;
  email: string;
  profilePhoto?: string;
  contactNumber?: string;
  address?: string;
  experience?: number;
  gender?: Gender;
  qualification: string;
}
