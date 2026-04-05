import { Request, Response } from "express";
import { EventService } from "./event.service";

const CreateEvent = async (req: Request, res: Response) => {
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

export const EventController = {
  CreateEvent,
};