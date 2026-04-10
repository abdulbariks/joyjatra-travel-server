import { Request, Response } from "express";
import httpStatus from "http-status";
import { EventService } from "./event.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const CreateEvent = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const user = req.user;
  console.log(payload);
  console.log("user========", user);

  const result = await EventService.createEvent(user, payload);
  sendResponse(res, {
    httpStatusCode: httpStatus.OK,
    success: true,
    message: "Event created successfully",
    data: result,
  });
});

export const EventController = {
  CreateEvent,
};
