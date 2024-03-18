export const questionsInitialState = {
  firstName: "",
  lastName: "",
  address: "",
  role: "",
  issues: [],
  email: "",
};

export type QuestionsStateType = {
  firstName: string;
  lastName: string;
  address: string;
  role: "DOCTOR" | "PATIENT";
  issues: string[];
  email: string;
};
