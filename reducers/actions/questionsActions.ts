export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_ROLE = "SET_ROLE";
export const SET_ISSUES = "SET_ISSUES";
export const REMOVE_ISSUES = "REMOVE_ISSUES";
export const SET_EMAIL = "SET_EMAIL";

export type QuestionsActionsType =
  | { type: "SET_FIRST_NAME"; payload: string }
  | {
      type: "SET_LAST_NAME";
      payload: string;
    }
  | {
      type: "SET_ADDRESS";
      payload: string;
    }
  | { type: "SET_ROLE"; payload: string }
  | { type: "SET_ISSUES"; payload: string }
  | { type: "REMOVE_ISSUES"; payload: string }
  | { type: "SET_EMAIL"; payload: string };
