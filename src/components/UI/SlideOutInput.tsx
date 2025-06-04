import { createSignal, type JSX } from "solid-js";
import { cn } from "../../utils/cn";

type SlideOutInputProps = {
  buttonChildren?: JSX.Element;
  direction: "left" | "right";
  onChange?: (newValue: string) => any;
  onBlur?: (newValue: string) => any;
};

const SlideOutInput = (props: SlideOutInputProps = { direction: "right" }) => {
  const [slideOut, setSlideOut] = createSignal(false);
  let inputRef: HTMLInputElement | undefined;

  const SlideOut = (e: Event) => {
    e.stopPropagation();
    setSlideOut(true);
    inputRef?.focus();
  };

  return (
    <div class="slide-out-div">
      <button onClick={SlideOut} class="slide-out-button">
        {props.buttonChildren}
      </button>
      <input
        class={cn("slide-out-input", slideOut() ? "out" : "")}
        ref={inputRef}
        onBlur={(e) => {
          setSlideOut(false);
          props.onBlur ? props.onBlur(e.target.value) : "";
        }}
        onChange={(e) => (props.onChange ? props.onChange(e.target.value) : "")}
      />
    </div>
  );
};

export default SlideOutInput;
