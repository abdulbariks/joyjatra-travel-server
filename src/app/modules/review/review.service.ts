import { prisma } from "../../../lib/prisma";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { IReview } from "./review.interface";

const createReview = async (user: IRequestUser, payload: IReview) => {
  if (!user.userId && !user.email) {
    throw new Error("User identification missing");
  }

  const tourist = await prisma.tourist.findUnique({
    where: user.userId ? { userId: user.userId } : { email: user.email! },
  });

  if (!tourist) {
    throw new Error("Only users with a Tourist profile can create reviews.");
  }

  const result = await prisma.review.create({
    data: {
      ...payload,
      touristId: tourist.id,
    },
  });

  return result;
};

export const ReviewService = {
  createReview,
};
