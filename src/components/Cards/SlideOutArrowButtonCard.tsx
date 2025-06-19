import { createSignal } from "solid-js";
import SlideArrowButton from "../UI/SlideArrowButton";
import UICard from "./UICard";

const SlideOutArrowButtonCard = () => {
  const [color, setColor] = createSignal("#ffffff");
  const [background, setBackground] = createSignal("#000000");
  return (
    <UICard
      options={[
        {
          name: "Color",
          type: "color",
          onChange: (newValue: string) => setColor(newValue),
          value: color(),
        },
        {
          name: "Background",
          type: "color",
          onChange: (newValue: string) => setBackground(newValue),
          value: background(),
        },
      ]}
    >
      <SlideArrowButton
        imageURL="/images/arrow-forward.svg"
        background={background()}
        color={color()}
      />
    </UICard>
  );
};

export default SlideOutArrowButtonCard;
