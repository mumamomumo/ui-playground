import UICard from "./UICard";
import TextInput from "../UI/TextInput";
import { createSignal } from "solid-js";

const TextInputCard = () => {
  const [cardBG, setCardBG] = createSignal("#ffffff");
  const [inputBG, setInputBG] = createSignal("#ffffff");
  const [fontColor, setFontColor] = createSignal("#000000");
  const [borderRadius, setBorderRadius] = createSignal(0);

  return (
    <UICard
      className="aspect-[6/5] relative"
      background={cardBG()}
      tags={{ css: "medium", script: "easy" }}
      options={[
        { name: "BG:", onChange: setCardBG, type: "color", value: cardBG() },
        //prettier-ignore
        { name: "Input", onChange: setInputBG,type: "color", value: inputBG() },
        //prettier-ignore
        { name: "Font", onChange: setFontColor, type: "color", value: fontColor() },
        //prettier-ignore
        { name: "Radius", onChange: setBorderRadius, type: "range", value: borderRadius(), lowerLimit: 0, upperLimit: 6 },
      ]}
    >
      <TextInput
        placeholder="Input"
        background={inputBG()}
        inputStyle={{
          color: fontColor(),
          "border-radius": `${borderRadius() / 4}rem`,
        }}
      />
      <p class="absolute bottom-5 left-5">{borderRadius() / 4} rem</p>
    </UICard>
  );
};

export default TextInputCard;
