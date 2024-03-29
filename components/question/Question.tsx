import { QuestionProps } from "@/types";
import classNames from "classnames";
import {
  EmailInput,
  FirstNameInput,
  IssuesInput,
  AddressInput,
  Intro,
  LastNameInput,
  RoleInput,
} from "./index";
import styles from "./Question.module.css";

export function Question({
  inView,
  inViewSlide,
  outView,
  outViewSlide,
  isRendered,
  type,
}: QuestionProps) {
  return (
    <div
      className={classNames(styles["question-box"], {
        [styles["slide-out"]]: outView,
        [styles["slide-in"]]: inView,
        [styles["out-view__up"]]: outViewSlide === "up",
        [styles["out-view__down"]]: outViewSlide === "down",
        [styles["in-view__up"]]: inViewSlide === "up",
        [styles["in-view__down"]]: inViewSlide === "down",
        [styles["rendered"]]: isRendered,
      })}
    >
      {type === "intro" && <Intro />}
      {type === "firstName" && <FirstNameInput />}
      {type === "lastName" && <LastNameInput />}
      {type === "address" && <AddressInput />}
      {type === "role" && <RoleInput />}
      {type === "issues" && <IssuesInput />}
      {type === "email" && <EmailInput />}
    </div>
  );
}
