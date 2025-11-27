import prisma from "../config/db.js";

export const createUserService = async (name, email, password) => {
  return prisma.user.create({
    data: {
      name,
      email,
      password, // we will hash later in auth system
    },
  });
};

export const getUsersService = async () => {
  return prisma.user.findMany();
};
