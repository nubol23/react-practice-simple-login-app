import { authTypes } from "../types/types";

export interface AuthState {
  accessToken: string;
  refreshToken: string;
  issuedAt: number;
  expiresAt: number;
  userId: string;
  firstName: string;
  email: string;
  logged: boolean;
}


export const authReducer = (state: AuthState | any = {}, action: any) => {
  switch (action.type) {
    case authTypes.login:
      return {
        ...action.payload,
        logged: true,
      }

    case authTypes.logout:
      return {
        logged: false,
      }

    default:
      return state;
  }
}