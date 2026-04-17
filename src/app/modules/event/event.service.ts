import { prisma } from "../../../lib/prisma";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { ICreateEventInput } from "./event.interface";

const createEvent = async (user: IRequestUser, payload: ICreateEventInput) => {
  const moderator = await prisma.moderator.findUnique({
    where: { userId: user.userId },
  });

  console.log("moderator==============", moderator);

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
      reviews: true,
    },
  });
  return events;
};

const deleteEvent = async (eventId: string, user: IRequestUser) => {
  // find event first
  const event = await prisma.event.findUnique({
    where: { id: eventId },
  });

  if (!event) {
    throw new Error("Event not found");
  }

  // ADMIN / SUPER_ADMIN → allow
  if (user.role === "ADMIN" || user.role === "SUPER_ADMIN") {
    return await prisma.event.delete({
      where: { id: eventId },
    });
  }

  // MODERATOR → check ownership
  if (user.role === "MODERATOR") {
    const moderator = await prisma.moderator.findUnique({
      where: { userId: user.userId },
    });

    if (!moderator) {
      throw new Error("Moderator profile not found");
    }

    if (event.moderatorId !== moderator.id) {
      throw new Error("You are not allowed to delete this event");
    }

    return await prisma.event.delete({
      where: { id: eventId },
    });
  }

  // fallback
  throw new Error("Unauthorized");
};

export const EventService = {
  createEvent,
  getAllEvents,
  deleteEvent,
};
