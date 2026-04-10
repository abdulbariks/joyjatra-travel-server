import { Gender } from "../../../generated/prisma/enums";

export interface ICreateModeratorInput {
  password: string;
  moderator: {
    name: string;
    email: string;
    password: string;
    profilePhoto?: string;
    contactNumber?: string;
    address?: string;
    experience?: number;
    gender?: Gender;
    qualification: string;
  };
}
