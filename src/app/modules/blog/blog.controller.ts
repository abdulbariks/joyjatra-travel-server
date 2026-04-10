import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { BlogService } from "./blog.service";

const createBlog = catchAsync(async (req: Request, res: Response) => {
  //   const file = req.file;
  //   const payload = req.body;
  const user = req.user;
  const payload = {
    ...req.body,
    imageUrl: req.file?.path,
  };

  const result = await BlogService.createBlog(user, payload);

  sendResponse(res, {
    httpStatusCode: httpStatus.OK,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

export const BlogController = {
  createBlog,
};
