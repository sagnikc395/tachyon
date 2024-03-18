import { DOCTOR_GOALS, PATIENT_GOALS } from "@/constants";

export function getGoals(role: "DOCTOR" | "PATIENT") {
  switch (role) {
    case "DOCTOR":
      return DOCTOR_GOALS;
    case "PATIENT":
    default:
      return PATIENT_GOALS;
  }
}
