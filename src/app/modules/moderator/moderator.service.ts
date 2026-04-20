import status from "http-status";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";
import AppError from "../../errorHelpers/AppError";
import { ICreateModeratorInput } from "./moderator.interface";

const createModerator = async (payload: ICreateModeratorInput) => {
  console.log(payload);

  const userExists = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (userExists) {
    // throw new Error("User with this email already exists");
    throw new AppError(status.CONFLICT, "User with this email already exists");
  }
  const userData = await auth.api.signUpEmail({
    body: {
      email: payload.email,
      password: payload.password,
      role: Role.MODERATOR,
      name: payload.name,
      needPasswordChange: false,
    },
  });
  try {
    const { password, ...moderatorFields } = payload;
    const result = await prisma.$transaction(async (tx) => {
      const moderatorData = await tx.moderator.create({
        data: {
          userId: userData.user.id,
          ...moderatorFields,
        },
      });

      const moderator = await tx.moderator.findUnique({
        where: {
          id: moderatorData.id,
        },
        select: {
          id: true,
          userId: true,
          name: true,
          email: true,
          profilePhoto: true,
          contactNumber: true,
          address: true,
          experience: true,
          gender: true,
          qualification: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              email: true,
              name: true,
              role: true,
              status: true,
              emailVerified: true,
              image: true,
              isDeleted: true,
              deletedAt: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });

      return moderator;
    });

    return result;
  } catch (error) {
    console.log("Transaction error : ", error);
    await prisma.user.delete({
      where: {
        id: userData.user.id,
      },
    });
    throw error;
  }
};

const getModerators = async () => {
  const moderators = await prisma.moderator.findMany({
    select: {
      id: true,
      userId: true,
      name: true,
      email: true,
      profilePhoto: true,
      contactNumber: true,
      address: true,
      experience: true,
      gender: true,
      qualification: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return moderators;
};

export const ModeratorService = {
  createModerator,
  getModerators,
};
