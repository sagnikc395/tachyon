import { useSharedStates } from "@/contexts";
import { BtnContainer, QuestionBoxHeading, QuestionBoxPara } from "../index";

export function Intro() {
  const { handleOkClick } = useSharedStates();

  return (
    <>
      <QuestionBoxHeading>tachyon patient onboarding</QuestionBoxHeading>
      <QuestionBoxPara>
        onboard your patients faster and save tons of money
        <br />
        <br />
        You will only need spend
        <br />- 10 mins for patient onboarding
      </QuestionBoxPara>
      <BtnContainer showPressEnter={true} onClick={handleOkClick}>
        I agree
      </BtnContainer>
    </>
  );
}
