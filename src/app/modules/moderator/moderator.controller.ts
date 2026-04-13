import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { ModeratorService } from "./moderator.service";

const createModerator = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  //   const user = req.user;
  //   console.log(payload);
  //   console.log("user========", user);

  const result = await ModeratorService.createModerator(payload);
  sendResponse(res, {
    httpStatusCode: httpStatus.OK,
    success: true,
    message: "Moderator created successfully",
    data: result,
  });
});

const getModerators = catchAsync(async (req: Request, res: Response) => {
  const result = await ModeratorService.getModerators();
  sendResponse(res, {
    httpStatusCode: httpStatus.OK,
    success: true,
    message: "Moderators retrieved successfully",
    data: result,
  });
});

export const ModeratorController = {
  createModerator,
  getModerators,
};
