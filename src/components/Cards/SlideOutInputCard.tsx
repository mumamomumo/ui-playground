import { createEffect, createSignal } from "solid-js";
import SlideOutInput from "../UI/SlideOutInput";
import UICard from "./UICard";

const SlideOutInputCard = () => {
  const [directionLeft, setDirectionLeft] = createSignal("true");
  const [version2, setVersion2] = createSignal(false);
  const [inputPlaceholder, setInputPlaceholder] = createSignal("Placeholder");

  createEffect(() => console.log(directionLeft()));

  return (
    <UICard
      tags={{
        css: "easy",
        script: "medium",
      }}
      className="justify-items-start"
      options={[
        {
          name: "From left",
          value: directionLeft(),
          onChange: setDirectionLeft,
          type: "checkbox",
        },
        {
          name: "Scale Instead",
          value: version2(),
          onChange: setVersion2,
          type: "checkbox",
        },
        {
          name: "Placeholder",
          value: inputPlaceholder(),
          onChange: setInputPlaceholder,
          type: "text",
        },
      ]}
    >
      <SlideOutInput
        buttonChildren={<img src="/images/Plus.svg" />}
        direction={directionLeft() ? "left" : "right"}
        version2={version2()}
        placeholder={inputPlaceholder()}
      />
    </UICard>
  );
};

export default SlideOutInputCard;
