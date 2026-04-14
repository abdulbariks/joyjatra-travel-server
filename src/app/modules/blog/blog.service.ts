import { prisma } from "../../../lib/prisma";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { ICreateBlogInput } from "./blog.interface";

const createBlog = async (user: IRequestUser, payload: ICreateBlogInput) => {
  console.log("USER:", user);
  console.log("PAYLOAD:", payload);

  //  find moderator
  const moderator = await prisma.moderator.findUnique({
    where: { userId: user.userId },
  });

  if (!moderator) {
    throw new Error("Only moderators can create blogs");
  }

  // create blog
  const result = await prisma.blog.create({
    data: {
      ...payload,
      moderatorId: moderator.id, // IMPORTANT FIX
    },
  });

  return result;
};

const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany({
    include: {
      moderator: true,
    },
  });
  return blogs;
};


export const BlogService = {
  createBlog,
  getAllBlogs
};
