import { Request, Response } from "express";
import httpStatus from "http-status";
import { EventService } from "./event.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const CreateEvent = catchAsync(async (req: Request, res: Response) => {
  const payload = {
    ...req.body,
    price: parseFloat(req.body.price),
    startDate: req.body.startDate
      ? new Date(req.body.startDate).toISOString()
      : null,

    endDate: req.body.endDate ? new Date(req.body.endDate).toISOString() : null,
    imageUrl: req.file ? req.file.path : undefined,
  };
  const user = req.user;
  // console.log("payload=========",payload);
  // console.log("user========", user);

  const result = await EventService.createEvent(user, payload);
  sendResponse(res, {
    httpStatusCode: httpStatus.OK,
    success: true,
    message: "Event created successfully",
    data: result,
  });
});

const getAllEvents = catchAsync(async (req: Request, res: Response) => {
  const result = await EventService.getAllEvents();
  sendResponse(res, {
    httpStatusCode: httpStatus.OK,
    success: true,
    message: "Events retrieved successfully",
    data: result,
  });
});

const updateEvent = catchAsync(async (req: Request, res: Response) => {
  const { eventId } = req.query;

  if (!eventId || typeof eventId !== "string") {
    return sendResponse(res, {
      httpStatusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "Invalid or missing event ID",
    });
  }

  const result = await EventService.updateEvent(eventId, req.user, req.body);

  sendResponse(res, {
    httpStatusCode: httpStatus.OK,
    success: true,
    message: "Event updated successfully",
    data: result,
  });
});

const deleteEvent = catchAsync(async (req: Request, res: Response) => {
  const { eventId } = req.query;

  if (!eventId || typeof eventId !== "string") {
    return sendResponse(res, {
      httpStatusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "Invalid event ID",
    });
  }

  const user = req.user;

  const result = await EventService.deleteEvent(eventId, user);

  sendResponse(res, {
    httpStatusCode: httpStatus.OK,
    success: true,
    message: "Event deleted successfully",
    data: result,
  });
});

export const EventController = {
  CreateEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
};
