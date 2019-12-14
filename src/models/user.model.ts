export type userRole = "USER" | "ADMIN";

export interface UserModel {
  name: string;
  _id: string;
  role: userRole;
  iat: number;
  exp: number;
}