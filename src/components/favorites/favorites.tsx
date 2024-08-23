import IntroContent from "./manage/intro-content";
import ChooseContent from "./manage/choose-content";

export default function Favorites(): JSX.Element {
  return (
    <div className="p-[5em]">
      <IntroContent />
      <ChooseContent />
    </div>
  );
}
