import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import httpStatus from "http-status";
import { BookingService } from "./booking.service";

const bookEvent = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const user = req.user;
  const booking = await BookingService.bookEvent(payload, user);
  sendResponse(res, {
    success: true,
    httpStatusCode: httpStatus.CREATED,
    message: "Appointment booked successfully",
    data: booking,
  });
});

const getMyBookings = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const bookings = await BookingService.getMyBookings(user);
  sendResponse(res, {
    success: true,
    httpStatusCode: httpStatus.OK,
    message: "My bookings retrieved successfully",
    data: bookings,
  });
});

const getBookings = catchAsync(async (req: Request, res: Response) => {
  const bookings = await BookingService.getBookings();
  sendResponse(res, {
    success: true,
    httpStatusCode: httpStatus.OK,
    message: "Bookings retrieved successfully",
    data: bookings,
  });
});

export const BookingController = {
  bookEvent,
  getMyBookings,
  getBookings,
};
