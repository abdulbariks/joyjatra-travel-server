
import { prisma } from "../../../lib/prisma";
import { ICreateEventInput } from "./event.interface";



const createEvent = async (moderatorId: string, payload: ICreateEventInput) => {
  const result = await prisma.event.create({
    data: {
      ...payload,
      startDate: new Date(payload.startDate),
      endDate: new Date(payload.endDate),
      moderatorId,
    },
  });
  return result;
};

export const EventService = {
  createEvent,
};