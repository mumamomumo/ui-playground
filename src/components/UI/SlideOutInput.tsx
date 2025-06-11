import { createEffect, createSignal, type JSX } from "solid-js";
import { cn } from "../../utils/cn";
import "./css/SlideOutInput.css";

type SlideOutInputProps = {
  buttonChildren?: JSX.Element;
  placeholder?: string;
  direction?: "left" | "right";
  version2?: boolean;
  onChange?: (newValue: string) => any;
  onBlur?: (newValue: string) => any;
  buttonStyle?: JSX.CSSProperties;
  buttonActiveStyle?: JSX.CSSProperties;
  inputStyle?: JSX.CSSProperties;
};

const SlideOutInput = (props: SlideOutInputProps) => {
  const [slideOut, setSlideOut] = createSignal(true);
  let inputRef: HTMLInputElement | undefined;

  createEffect(() => {
    if (slideOut()) inputRef?.focus();
    else inputRef?.blur();
  });

  return (
    <div
      class={cn(
        "slide-out-container",
        props.direction != "right" ? "left" : "right"
      )}
    >
      <button
        class={cn(
          "slide-out-button",
          slideOut() ? "out" : "",
          props.direction != "right" ? "left" : "right"
        )}
        onClick={() => {
          setSlideOut((prev) => !prev);
        }}
        style={slideOut() ? props.buttonActiveStyle : props.buttonStyle}
      >
        {props.buttonChildren}
      </button>
      <div
        class={cn(
          "slide-out-input-container",
          slideOut() ? "out" : "",
          props.direction != "right" ? "left" : "right",
          props.version2 ? "v2" : ""
        )}
      >
        <input
          class={cn("slide-out-input", slideOut() ? "out" : "")}
          ref={inputRef}
          placeholder={props.placeholder}
          onBlur={(e) => {
            if (props.onBlur) props.onBlur(e.target.value);
          }}
          onChange={(e) =>
            props.onChange ? props.onChange(e.target.value) : ""
          }
        />
      </div>
    </div>
  );
};

export default SlideOutInput;
