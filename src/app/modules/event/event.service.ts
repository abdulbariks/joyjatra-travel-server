
import { prisma } from "../../../lib/prisma";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { ICreateEventInput } from "./event.interface";



const createEvent = async (user : IRequestUser, payload: ICreateEventInput) => {

  const moderator = await prisma.moderator.findUnique({
    where: { userId: user.userId } 
  });

  if (!moderator) {
    throw new Error("Only users with a Moderator profile can create events.");
  }

  const result = await prisma.event.create({
    data: {
      ...payload,
      startDate: new Date(payload.startDate),
      endDate: new Date(payload.endDate),
      moderatorId: user.userId,
    },
  });
  return result;
};

export const EventService = {
  createEvent,
};