import FuzzyText from "../../TextAnimations/FuzzyText/FuzzyText";
import "./notFound.css";

export default function NotFound() {
  const hoverIntensity = 0.5;
  const enableHover = true;

  return (
    <div className="fuzzytextAnimate">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
      >
        404
      </FuzzyText>
    </div>
  );
}
