import { createSignal } from "solid-js";
import TypewriterText from "../UI/Typewriter";
import UICard from "./UICard";

const TypewriterCard = () => {
  const [words, setWords] = createSignal([
    "Word 1",
    "Another word",
    "Super cool word",
  ]);

  const [typingSpeed, setTypingSpeed] = createSignal(100);
  const [deletingSpeed, setDeletingSpeed] = createSignal(50);

  return (
    <UICard
      tags={{ script: "hard" }}
      options={[
        {
          name: "Words",
          type: "area",
          onChange: (newValue: string) =>
            setWords(newValue.split(",").map((word) => word.trim())),
          placeholder: "Separate with commas",
          value: words().join(","),
        },
        {
          name: "Type speed",
          type: "range",
          value: 100,
          onChange: (newValue: number) => setTypingSpeed(newValue),
          lowerLimit: 10,
          upperLimit: 100,
        },
        {
          name: "Delete speed",
          type: "range",
          value: 50,
          onChange: (newValue: number) => setDeletingSpeed(newValue),
          lowerLimit: 0,
          upperLimit: 100,
        },
      ]}
    >
      <TypewriterText
        className="mx-auto text-center"
        words={words()}
        typingSpeed={typingSpeed()}
        deleteSpeed={deletingSpeed()}
      />
      <p class="absolute bottom-5 left-5">
        Speed: {typingSpeed()}, {deletingSpeed()}
      </p>
    </UICard>
  );
};

export default TypewriterCard;
