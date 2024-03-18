import {
  QuestionsActionsType,
  QuestionsStateType,
  REMOVE_GOAL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_ADDRESS,
  SET_ROLE,
  SET_ISSUES,
  SET_EMAIL,
} from "../index";

export function questionsReducerFunc(
  state: QuestionsStateType,
  action: QuestionsActionsType
) {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };

    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case SET_ROLE:
      return { ...state, role: action.payload };

    case SET_ISSUES:
      return { ...state, issues: [...state.issues, action.payload] };

    case REMOVE_GOAL:
      return {
        ...state,
        goals: state.issues.filter((issue) => issue !== action.payload),
      };

    case SET_EMAIL:
      return { ...state, email: action.payload };

    default:
      return state;
  }
}
