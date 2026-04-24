import { prisma } from "../../../lib/prisma";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { IBookingPayload } from "./booking.interface";

const bookEvent = async (payload: IBookingPayload, user: IRequestUser) => {
  const touristData = await prisma.tourist.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });
};

const getMyBookings = async (user: IRequestUser) => {
  const touristData = await prisma.tourist.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });
  const bookings = await prisma.booking.findMany({
    where: {
      touristId: touristData.id,
    },
  });
  return bookings;
};

const getBookings = async () => {
  const bookings = await prisma.booking.findMany();
  return bookings;
};

export const BookingService = {
  bookEvent,
  getMyBookings,
  getBookings,
};
