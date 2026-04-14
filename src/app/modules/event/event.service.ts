
import { prisma } from "../../../lib/prisma";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { ICreateEventInput } from "./event.interface";



const createEvent = async (user : IRequestUser, payload: ICreateEventInput) => {

  const moderator = await prisma.moderator.findUnique({
    where: { userId: user.userId } 
  });

  console.log("moderator==============",moderator);
  
  if (!moderator) {
    throw new Error("Only users with a Moderator profile can create events.");
  }

  const result = await prisma.event.create({
    data: {
      ...payload,
      moderatorId: moderator?.id,
    },
  });
  return result;
};

const getAllEvents = async () => {
  const events = await prisma.event.findMany({
    include: {
      moderator: true,
      reviews:true,
    },
  });
  return events;
};


export const EventService = {
  createEvent,
  getAllEvents,
};