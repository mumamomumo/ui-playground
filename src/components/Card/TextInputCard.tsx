import UICard from "../UICard";
import TextInput from "../UI/TextInput";
import { createSignal, Show } from "solid-js";
import Cog from "../image/Cog";
import { cn } from "../../utils/cn";
import { getNewColor } from "../../utils/randomColor";

const TextInputCard = () => {
  const [cardBG, setCardBG] = createSignal("#ffffff");
  const [inputBG, setInputBG] = createSignal("#ffffff");
  const [fontColor, setFontColor] = createSignal("#000000");
  const [borderRadius, setBorderRadius] = createSignal(0);

  const [optionsOpen, setOptionsOpen] = createSignal(false);

  return (
    <UICard
      className="aspect-[6/5] relative"
      background={cardBG()}
      onClick={() => setCardBG(getNewColor())}
    >
      <div
        class="absolute right-5 bottom-5"
        onClick={() => setOptionsOpen((prev) => !prev)}
      >
        <Cog
          width={25}
          className={cn(
            "card-settings transition-[rotate] fancy-hover",
            optionsOpen() ? "rotate-90 after:[scale:1_!important]" : "rotate-0"
          )}
        />
        <Show when={optionsOpen()}>
          <div
            class="card-options cursor-default max-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* BG color */}
            <div class="flex justify-between">
              <label for="bg-color">BG:</label>
              <input
                name="bg-color"
                onChange={(e) => setCardBG(e.target.value)}
                value={cardBG()}
                type="color"
              />
            </div>
            {/* Input color */}
            <div class="flex justify-between">
              <label for="input-color">Input:</label>
              <input
                name="input-color"
                onChange={(e) => setInputBG(e.target.value)}
                value={inputBG()}
                type="color"
              />
            </div>
            {/* Font color */}
            <div class="flex justify-between">
              <label for="font-color">Font color:</label>
              <input
                name="font-color"
                onChange={(e) => setFontColor(e.target.value)}
                value={fontColor()}
                type="color"
              />
            </div>
            {/* Border radius */}
            <div class="flex justify-between">
              <label for="border-radius">Radius:</label>
              <div class="flex justify-center flex-1">
                <p>0</p>
                <input
                  name="border-radius"
                  class="border-b-2 outline-none max-w-1/2"
                  type="range"
                  value={borderRadius() / 0.25}
                  min={0}
                  max={4}
                  onChange={(e) =>
                    setBorderRadius(0.25 * parseInt(e.target.value))
                  }
                />
                <p>1</p>
              </div>
            </div>
          </div>
        </Show>
      </div>
      <TextInput
        placeholder="Input"
        background={inputBG()}
        inputStyle={{
          color: fontColor(),
          "border-radius": `${borderRadius()}rem`,
        }}
      />
      <p class="absolute bottom-5 left-5">{borderRadius()} rem</p>
    </UICard>
  );
};

export default TextInputCard;
