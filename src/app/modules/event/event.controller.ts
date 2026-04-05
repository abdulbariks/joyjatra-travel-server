import { Request, Response } from "express";
import httpStatus from "http-status";
import { EventService } from "./event.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const CreateEvents = async (req: Request, res: Response) => {
  try {
    // moderatorId usually comes from the decoded token in checkAuth middleware
    const moderatorId = (req as any).user.id; 
    const eventData = req.body;

    console.log(moderatorId);
    console.log(eventData);

    const result = await EventService.createEvent(moderatorId, eventData);

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const CreateEvent = catchAsync(async (req: Request, res: Response) => {
    const payload = req.body;
    const user = req.user;
    console.log(payload);
    console.log("user========",user);
    
    
    const result = await EventService.createEvent(user, payload);
    sendResponse(res, {
        httpStatusCode: httpStatus.OK,
        success: true,
        message: 'Event created successfully',
        data: result,
    });
});

export const EventController = {
  CreateEvent,
};